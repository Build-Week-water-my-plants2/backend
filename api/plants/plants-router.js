const router = require("express").Router();

const Plants = require("./plants-model");

router.get("/", (req, res, next) => {
  Plants.get()
    .then((plants) => {
      res.json(plants);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  Plants.getById(req.params.id)
    .then((plant) => {
      res.json(plant);
    })
    .catch(next);
});

router.post("/add", (req, res, next) => {
  // const { plant_name, species_name, watering_freq, image_url, user_id } = req.body
  Plants.add(req.body)
    .then((newPlant) => {
      res.status(201).json(newPlant);
    })
    .catch(next);
});

router.put("/:id", async (req, res, next) => {
  try {
    const updatedPlant = await Plants.updateById(req.params.id, req.body);
    res.json(updatedPlant);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", (req, res, next) => {
  Plants.deleteById(req.params.id)
    .then(() => {
      res.status(200).json({ message: "Plant has been removed" });
    })
    .catch(next);
});

module.exports = router;
