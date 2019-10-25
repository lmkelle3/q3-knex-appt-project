const express = require("express");
const router = express.Router();
const knex = require("../db/knex");
const users_controller = require("../controllers/users_controller");

router.get("/", users_controller.getAllUsers);

router.get("/appts/:id", users_controller.getOneUser);

router.post("/appts", users_controller.addOneUser);

router.patch("/appts/:id", users_controller.updateOneUser);

router.delete("/appts/:id", users_controller.removeOneUser);

module.exports = router;
