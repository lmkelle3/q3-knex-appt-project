const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const cors = require("cors");
const knex = require("./db/knex");

const app = express();

app.get("/appointments", (req, res) => {
  knex.raw("SELECT * FROM appointments").then(result => {
    res.json(result.rows);
  });
});

app.get("/appointments/:id", (req, res) => {
  knex
    .raw(`SELECT * FROM appointments WHERE id = ${req.params.id}`)
    .then(result => {
      if (!result.rows.length) {
        res.status(400).json({
          status: 400,
          message: "can't find the appointment you are looking for"
        });
      } else {
        res.json(result.rows);
      }
    });
});

app.use(cors());
app.use(bodyParser.json());

app.use("/", index);
app.use("/todos", todos);

app.listen(port, function() {
  console.log("listening on port: ", port);
});
