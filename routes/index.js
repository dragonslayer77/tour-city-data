const express = require('express');
const router = express.Router();
const { showAllTours, createTour, showTour, deleteTour, editTour } = require('../controllers/tours');
const { showAllCities, createCity, showCity, editCity, deleteCity } = require('../controllers/cities');

/* TOUR */
router.get('/tours', showAllTours);

router.post('/tour/new', createTour);

router.get('/tour/:id', showTour);

router.post('/tour/:id/edit', editTour);

router.post('/tour/:id/delete', deleteTour);

/* CITY */

router.get('/cities', showAllCities);

router.post('/city/new', createCity);

router.get('/city/:id', showCity);

router.post('/city/:id/edit', editCity);

router.post('/city/:id/delete', deleteCity);



module.exports = router;
