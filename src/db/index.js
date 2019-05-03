const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

client.connect((...f) => {
  console.log(f);
});

module.exports = client;
