import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import webhookRoutes from "./routes/webhook.routes.js";

const app = express();

// app.use(bodyParser.json());
app.use(express.json())
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true })); // Parseo de datos de formularios

app.use("/webhook", webhookRoutes);

export default app;