const express = require('express');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
    .then((droneInfos) => {
      console.log(droneInfos)
      res.render("drones/list", { droneInfos })
    })
    .catch((error) => {
      console.log(error);
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body
  Drone.create(req.body)
    .then((createDroneInfos) => {
      console.log(createDroneInfos)
      res.redirect("/drones")
    })
    .catch((error) => {
      console.log("Something went wrong")
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params
  Drone.findById(id)
    .then((droneData) => {
      console.log(droneData)
      res.render("drones/update-form", { droneData })
    })
    .catch((error) => {
      console.log("Error: ", error)
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here

});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
