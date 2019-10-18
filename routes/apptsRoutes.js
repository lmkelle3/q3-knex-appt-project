const express = require("express");
const router = express.Router();
const knex = require("../db/knex");

router.get("/", function(req, res, next) {
  knex.raw("SELECT * from appts").then(function(appts) {
    res.send(appts.rows);
  });
});

router.post('/appts', function(req, res) {
  knex.raw(`insert into appts(name, age, email) values('${req.body.name}', ${req.body.age}, '${req.body.email}')`).then(function() {
    knex.raw(`select * from appts`).then(function(appts) {
      res.send(people.rows);
    });
  })
})

router.patch("/appts/:id", (req, res) => {
  knex
    .raw(
      `UPDATE appts SET name = '${req.body.name}', email = '${
        req.body.email
      }', age = '${req.body.age}' WHERE id = ${Number(req.params.id)}`
    )
    .then(function(users) {
      res.send(users.rows);
    })
    .catch(err => res.status(400).send('bad request');
});

router.delete("/appts/:id", (req, res) => {
  knex
    .raw(`DELETE FROM users WHERE id = ${req.params.id}`)
    .then(function(appts) {
      res.send(appts.rows);
    })
    .catch(err => res.status(400).send('bad request');
});

module.exports = router;
