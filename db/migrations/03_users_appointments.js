exports.up = function(knex) {
  return knex.schema.createTable("users_appointments", function(table) {
    table.increments();
    table.integer("user_id").references("users.id");
    table.integer("appointment_id").references("appointments.id");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users_appointments");
};
