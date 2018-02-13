
exports.up = function(knex, Promise) {
  return knex.schema.createTable("customers", function(table) {
    table.increments();
    table.string("name");
    table.string("email");
    table.string("gender");
    table.integer("age");
    table.string("size").notNullable();
    table.string("color").notNullable();
    table.string("reason_to_buy");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("customers");
};