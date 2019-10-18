exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("appts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("appts").insert([
        { colName: "rowValue1" },
        { colName: "rowValue2" },
        { colName: "rowValue3" }
      ]);
    });
};
