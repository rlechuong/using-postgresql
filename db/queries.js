import pool from "./pool.js";

const getAllUsernames = async () => {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
};

const insertUsername = async (username) => {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
};

const searchUsername = async (search) => {
  const { rows } = await pool.query("SELECT * FROM usernames WHERE username ILIKE $1", [
    `%${search}%`,
  ]);
  return rows;
};

export { getAllUsernames, insertUsername, searchUsername };
