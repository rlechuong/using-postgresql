import { Router } from "express";

const usernamesRouter = Router();

usernamesRouter.get("/", (req, res) => {
  console.log("usernames will be logged here - wip");
});

usernamesRouter.get("/new", (req, res) => {
  res.render("addUsername");
});

usernamesRouter.post("/new", (req, res) => {
  console.log("username to be saved: ", req.body.username);
});

export default usernamesRouter;
