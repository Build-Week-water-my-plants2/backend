exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables
  return knex("plants")
    .insert({
      plant_name: 'Orchid',
      species_name: 'Orchidaceae', // plain text password is 1234
      watering_freq: 'weekly',
      user_id: 1
    });
};
