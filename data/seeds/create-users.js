
exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables
  return knex("users")
    .insert({
      username: 'johnfigs',
      password: '1234', // plain text password is 1234
      phone: '8052223333'
    });
};
