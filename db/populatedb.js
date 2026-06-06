import { Client } from "pg";

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR (255)
);

INSERT INTO usernames (username)
VALUES 
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

const main = async () => {
  console.log("Seeding...");
  const connectionString = process.argv[2];
  const client = new Client({ connectionString });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Done.");
};

main();
