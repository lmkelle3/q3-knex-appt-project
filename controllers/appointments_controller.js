const knex = require("../db/knex");

exports.getAllAppointments = function(req, res) {
  knex("appts").then(appts => res.json(appts));
};

exports.getOneAppointment = function(req, res) {
  knex("appts")
    .where("id", req.params.id)
    .then(appts => res.json(appts));
};

exports.addOneAppointment = function(req, res) {
  knex("appts")
    .insert(req.body)
    .returning("*")
    .then(newAppt => res.json(newAppt));
};

exports.updateOneAppointment = function(req, res) {
  knex("appts")
    .update({
      ...req.body,
      updated_at: new Date()
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedAppt => res.json(updatedAppt));
};

exports.removeOneAppointment = function(req, res) {
  knex("appts")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newAppt => res.json(newAppt));
};
