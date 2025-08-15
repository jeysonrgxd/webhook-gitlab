import app from "./app.js";
import { log } from "./utils/logger.js";
import { PORT } from './config/env.js'

app.listen(PORT, () => {
    log(`🚀 Servidor Webhook escuchando en http://localhost:${PORT}`);
});