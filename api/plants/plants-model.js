const db = require("../../data/db-config");

function get() {
  return db("plants").select(
    "plant_id",
    "plant_name",
    "species_name",
    "watering_freq",
    "image_url"
  );
}

function getById(id) {
  return db("plants")
    .select(
      "plant_id",
      "plant_name",
      "species_name",
      "watering_freq",
      "image_url"
    )
    .where("plant_id", id)
    .first();
}

async function add(plant) {
  const [newPlant] = await db("plants").insert(plant, [
    "plant_id",
    "plant_name",
    "species_name",
    "watering_freq",
    "image_url",
    "user_id",
  ]);
  return newPlant;
}

const updateById = async (id, plant) => {
  await db("plants").update(plant).where("plant_id", id);
  return getById(id);
};

const deleteById = async (id) => {
  const removed = await getById(id);
  await db("plants").where("plant_id", id).delete();
  return removed;
};

module.exports = {
  get,
  getById,
  add,
  updateById,
  deleteById,
};
