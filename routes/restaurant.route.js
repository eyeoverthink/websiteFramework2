const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurant.controller');

// Route to create a new restaurant
router.post('/restaurant', restaurantController.addRestaurant);

// Route to get all restaurants
router.get('/restaurants', restaurantController.getAllRestaurants);

// Route to get a single restaurant by ID
router.get('/restaurant/:id', restaurantController.getRestaurant);

// Route to update a restaurant by ID
router.put('/restaurant/:id', restaurantController.updateRestaurant);

// Route to delete a restaurant by ID
router.delete('/restaurant/:id', restaurantController.deleteRestaurant);

module.exports = router;