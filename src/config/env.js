import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const SECRET_TOKEN = process.env.SECRET_TOKEN || "prueba"; // GitLab secret