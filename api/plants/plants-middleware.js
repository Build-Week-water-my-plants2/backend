const { plantSchema } = require("../../helpers/schemas");

const validatePlantload = async (req, res, next) => {
  try {
    const { plant_name, species_name, watering_freq, image_url, user_id } =
      req.body;
    const plant = {
      plant_name,
      species_name,
      watering_freq,
      image_url,
      user_id,
    };
    const validated = await plantSchema.validate(plant);
    req.body = validated;
    next();
  } catch (err) {
    next({
      status: 400,
      message: err.message,
    });
  }
};

module.exports = {
  validatePlantload,
}
