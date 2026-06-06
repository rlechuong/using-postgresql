import { getAllUsernames, insertUsername } from "../db/queries.js";

const getUsernames = async (req, res) => {
  const usernames = await getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
};

const createUsernameGet = (req, res) => {
  res.render("addUsername");
};

const createUsernamePost = async (req, res) => {
  const { username } = req.body;
  await insertUsername(username);
  res.redirect("/");
};

export { getUsernames, createUsernameGet, createUsernamePost };
