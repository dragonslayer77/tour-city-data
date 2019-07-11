const express = require("express");
const Tour = require("../models/Tour");
const City = require("../models/City");

const showAllTours = (req, res, next) => {
    Tour.find({}, (err, foundTours) => {
        if (err) {
            res.json({error: err});
        }
        res.json({tours: [foundTours]});
    });
};

const createTour = (req, res, next) => {
    Tour.find({ name: req.body.name }, (error,foundTours) => {
        if (error) {
            return res.json({error: error});
        }
        if (foundTours.length !== 0) {
            return res.json({error: error});
        }
        Tour.create(req.body, (err, createdTour) => {
            if (err) {
                // send the error from db to the view error.pug
                res.json({error: err});
            }
            return res.json({tour: [createdTour]});
        })
    }) 
};

const showTour = (req, res, next) => {
    City.find({tour_id: req.params.id}, (error, foundCity) => {
        if (error) return res.json({error: error});
        Tour.findById(req.params.id, (err, foundTour) => {
            if (err) {
                res.json({error: err});
            }
            res.json({tour: [foundTour], city: foundCity});
        });
    })
};


const deleteTour = (req, res, next) => {
    Tour.deleteOne({_id: req.params.id}, (err) => {
        if (err) {
            res.json({error: err});
        }
        res.json({message: "tour deleted"});
    });
};


const editTour = (req, res, next) => {
    Tour.findById(req.params.id, (err, foundTour) => {
        if (err) return res.json({error: err});
          foundTour.name = req.body.name;
          foundTour.duration = req.body.duration;
          foundTour.price = req.body.price;

          foundTour.save((error, savedTour) => {
            if (err) {
                return res.json({error: err});
            }
               return res.json({tour: [savedTour]})
          })
    });
}


module.exports = { showAllTours, createTour, showTour, deleteTour, editTour };