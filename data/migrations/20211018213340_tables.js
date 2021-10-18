
exports.up = async function(knex) {
  await knex.schema
    .createTable('users', tbl => {
      tbl.increments('user_id')
      tbl.text('username').notNullable()
      tbl.text('password').notNullable()
      tbl.text('phone').notNullable()
    })
    .createTable('plants', tbl => {
      tbl.increments('plant_id')
      tbl.text('plant_name').notNullable()
      tbl.text('species_name').notNullable()
      tbl.text('watering_freq').notNullable()
      tbl.text('image_url')
      tbl.integer('user_id')
        .unsigned()
        .references('user_id')
        .inTable('users')
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('plants')
    .dropTableIfExists('users')
};
