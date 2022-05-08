import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

//Crear el envio de correos
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "a9bd39afe4a237",
    pass: "afae43ee9cf964",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    //Enviar correo
    await transport.sendMail({
      from: "Equipe feedget <oi@feedget.com>",
      to: "Kevin Cruz <kevin_mcp@outlook.com>",
      subject,
      html: body,
    });
  }
}
