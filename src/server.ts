import cors from "cors";
import express from "express";
import { routes } from "./routes";

const app = express();

//Seguridad para restringir las direcciones de front end que pueden ingresar al backend
app.use(cors());

//Para que funcione en formato json
app.use(express.json());

//Usando las rutas
app.use(routes);

//El servidor escuchara la puerta 3333
app.listen(3333, () => {
  console.log("Server started on port 3333");
});
