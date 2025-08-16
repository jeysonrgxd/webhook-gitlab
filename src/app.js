import express from "express";
import morgan from "morgan";
import webhookRoutes from "./routes/webhook.routes.js";

const app = express();

// app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true })); // Parseo de datos de formularios

app.use("/webhook", webhookRoutes);

app.use("/", (req, res) => {
  res.send(
    "<h1>WEBHOOK PROBAR METODO GET <a href='/webhook'>click.!</a></h1> "
  );
});

export default app;
