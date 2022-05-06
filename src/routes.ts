import express from "express";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";

export const routes = express.Router();

//Crear el envio de correos
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "a9bd39afe4a237",
    pass: "afae43ee9cf964",
  },
});

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  //Almacenar el feedback en la base de datos
  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  //Enviar correo
  await transport.sendMail({
    from: "Equipe feedget <oi@feedget.com>",
    to: "Kevin Cruz <kevin_mcp@outlook.com>",
    subject: "Novo feedback",
    html: [
      `<div style="font-family: sans-serif; font-size:16px; color:#222;">`,
      `<p> Tipo do feeback: ${type} </p>`,
      `<p> Comentario: ${comment} </p>`,
      `</div>`,
    ].join("\n"),
  });

  return res.status(201).json({ data: feedback });
});
