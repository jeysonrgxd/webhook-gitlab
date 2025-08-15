import { log } from "../utils/logger.js";
import { SECRET_TOKEN } from "../config/env.js";

export const handleGitlabEvent = (req, res) => {
    const gitlabToken = req.headers["x-gitlab-token"];

    if (gitlabToken !== SECRET_TOKEN) {
        log("❌ Token inválido");
        return res.status(401).json({ message: "Unauthorized" });
    }

    const event = req.headers["x-gitlab-event"];
    log(`📩 Evento recibido: ${event}`);
    log("Payload:", req.body);

    return res.status(200).json({ message: "Evento procesado" });
};