import { Router } from "express";
import {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
} from "../controllers/usernamesController.js";

const usernamesRouter = Router();

usernamesRouter.get("/", getUsernames);

usernamesRouter.get("/new", createUsernameGet);

usernamesRouter.post("/new", createUsernamePost);

export default usernamesRouter;
