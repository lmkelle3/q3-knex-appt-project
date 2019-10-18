exports.up = function(knex) {
  return knex.schema.createTable("users", function(table) {
    table.varchar("name").notNullable();
    table.integer("age");
    table.varchar("email").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
