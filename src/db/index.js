const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

module.exports = {
  query: function(text, values, cb) {
    client.connect(function(err, client, done) {
      client.query(text, values, function(err, result) {
        done();
        cb(err, result);
      });
    });
  }
};
