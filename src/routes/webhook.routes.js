import { Router } from "express";
import { handleGitlabEvent } from "../controllers/webhook.controller.js";

const router = Router();

router.post("/gitlab", handleGitlabEvent);

router.get("/", (req,res)=> {

    res.send("<h1>Hola esta en el webhook</h1>")

});

export default router;