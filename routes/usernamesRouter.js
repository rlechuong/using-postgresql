import { Router } from "express";
import {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteUsernamesGet,
} from "../controllers/usernamesController.js";

const usernamesRouter = Router();

usernamesRouter.get("/", getUsernames);

usernamesRouter.get("/new", createUsernameGet);

usernamesRouter.post("/new", createUsernamePost);

usernamesRouter.get("/delete", deleteUsernamesGet);

export default usernamesRouter;
