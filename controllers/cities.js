const express = require("express");
const City = require("../models/City");

const showAllCities = (req, res, next) => {
    City.find({}, (err, foundCities) => {
        if (err) {
            res.json({error: err});
        }
        res.json({cities: [foundCities]});
    });
};

const createCity = (req, res, next) => {
    City.find({ name: req.body.name }, (error,foundCity) => {
        if (error) {
            return res.json({error: error});
        }
        if (foundCity.length !== 0) {
            return res.json({message: "no duplicate entries"});
        }
        City.create(req.body, (err, createdCity) => {
            if (err) {
                // send the error from db to the view error.pug
                res.json({error: err});
            }
            return res.json({city: [createdCity]});
        })
    }) 
};


const showCity = (req, res, next) => {
    City.findById(req.params.id, (err, foundCity) => {
        if (err) {
            res.json({error: err});
        }
        res.json({city: [foundCity]});
    });
};

const editCity = (req, res, next) => {
    City.findById(req.params.id, (err, foundCity) => {
        if (err) return res.json({error: err});
          foundCity.name = req.body.name;
          foundCity.description = req.body.description;
          foundCity.tour_id = req.body.tour_id;

          foundCity.save((error, savedCity) => {
            if (err) {
                return res.json({error: err});
            }
               return res.json({city: [savedCity]})
          })
    });
}

const deleteCity = (req, res, next) => {
    City.deleteOne({_id: req.params.id}, (err) => {
        if (err) {
            res.json({error: err});
        }
        res.json({message: "city deleted"});
    });
};

module.exports = { showAllCities, createCity, showCity, editCity, deleteCity };