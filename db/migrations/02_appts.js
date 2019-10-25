exports.up = function(knex) {
  return knex.schema.createTable("appts", function(table) {
    table.string("name").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("appts");
};
