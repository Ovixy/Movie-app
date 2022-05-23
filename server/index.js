var sqlite3 = require("sqlite3").verbose();
var express = require("express");
var http = require("http");
var bodyParser = require("body-parser");
var app = express();
var server = http.createServer(app);
var db = new sqlite3.Database("./database/movies.db");
var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
db.run(
  "CREATE TABLE IF NOT EXISTS movies(id INTEGER PRIMARY KEY, name TEXT, details TEXT, year INTEGER, rating REAL, image TEXT, genre TEXT)"
);

app.get("/", function (req, res) {
  res.send("Api works!");
});

// Add movie
app.post("/movies/add", function (req, res) {
  console.log(req.body.name);
  db.serialize(() => {
    db.run(
      `INSERT INTO movies(name,year,rating,image, genre, details) VALUES(?,?,?,?,?,?)`,
      [
        req.body.name,
        req.body.year,
         
        req.body.rating,
        req.body.image,
        req.body.genre,
        req.body.details,
      ],
      function (err) {
        if (err) {
          return console.log(err.message);
        }
        console.log("New movie has been added");
        res.send(
          "New movie has been added into the database with Name = " +
            req.body.name
        );
      }
    );
  });
});

// Update movie
app.get("/movies/update/:id", function (req, res) {
  db.serialize(() => {
    db.run(
      "UPDATE movie SET name = ? WHERE id = ?",
      [req.body.name, req.body.id],
      function (err) {
        if (err) {
          res.send("Error encountered while updating");
          return console.error(err.message);
        }
        res.send("Entry updated successfully");
        console.log("Entry updated successfully");
      }
    );
  });
});

// View all movies
app.get("/movies/", function (req, res) {
  db.serialize(() => {
    db.all("SELECT * FROM movies", (error, rows) => {
      /*gets called for every row our query returns*/
      rows.forEach((row) => console.log(`${row.name} is a ${row.year}`));
      res.send(rows);
    });
  });
});

// View one movie
app.get("/movies/:id", function (req, res) {
  db.serialize(() => {
    db.each(
      "SELECT id ID, name NAME FROM movies WHERE id =?",
      [req.body.id],
      function (err, row) {
        if (err) {
          res.send("Error encountered while displaying");
          return console.error(err.message);
        }
        res.send(` ID: ${row.ID},    Name: ${row.NAME}`);
        console.log("Entry displayed successfully");
      }
    );
  });
});

// Delete movie
app.get("/movies/:id", function (req, res) {
  db.serialize(() => {
    db.run("DELETE FROM emp WHERE id = ?", req.body.id, function (err) {
      if (err) {
        res.send("Error encountered while deleting");
        return console.error(err.message);
      }
      res.send("Entry deleted");
      console.log("Entry deleted");
    });
  });
});

// Server port
server.listen(4000, function () {
  console.log("Server listening on port: 4000");
});
