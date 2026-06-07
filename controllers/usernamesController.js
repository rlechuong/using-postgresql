import {
  getAllUsernames,
  insertUsername,
  searchUsername,
  deleteAllUsernames,
} from "../db/queries.js";

const getUsernames = async (req, res) => {
  const usernames = req.query.search
    ? await searchUsername(req.query.search)
    : await getAllUsernames();

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

const deleteUsernamesGet = async (req, res) => {
  await deleteAllUsernames();
  res.redirect("/");
};

export { getUsernames, createUsernameGet, createUsernamePost, deleteUsernamesGet };
