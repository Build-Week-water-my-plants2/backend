const db = require('./../../data/db-config')

async function add(user) {
    const [newUserObject] = await db('users')
    .insert(user, ['user_id', 'username', 'password'])
    return newUserObject
}

function findById(id) {
    return db('users')
    .select('user_id', 'username', 'password')
    .where('user_id', id)
}


function findBy(filter) {
    return db('users')
    .select('user_id', 'username', 'password')
    .where(filter)
}

const updateById = async (id, user) => {
    await db('users')
        .update(user)
        .where('user_id', id)
    return findById(id)
}
module.exports = {
    findById,
    findBy,
    add,
    updateById,
}