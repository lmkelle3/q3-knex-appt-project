const express = require("express");
const router = express.Router();
const knex = require("../db/knex");
const appointments_controller = require("../controllers/appointments_controller");

router.get("/", appointments_controller.getAllAppointments);

router.get("/appts/:id", appointments_controller.getOneAppointment);

router.post("/appts", appointments_controller.addOneAppointment);

router.patch("/appts/:id", appointments_controller.updateOneAppointment);

router.delete("/appts/:id", appointments_controller.removeOneAppointment);

module.exports = router;
