import { Router } from "express";
import { handleGitlabEvent } from "../controllers/webhook.controller.js";

const router = Router();

router.post("/gitlab", handleGitlabEvent);

router.get("/hola", (req,res)=> {

    res.send("<h1>Hola como estas</h1>")

});

export default router;