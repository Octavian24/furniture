"use strict";

const locations = require('../models').locations;

exports.list = function (req, res) {
  locations.findAll().then(locations => {
    res.jsonp(locations);
  }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
  locations.create(req.body)
    .then(Location => res.jsonp(Location))
    .catch((error) => res.status(400).send(error));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  locations.findById(id).then(locations => {
    if (!locations) {
      return res.status(400).send({
        message: 'Location Not Found',
      });
    }
    res.jsonp(locations);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  locations.findById(req.params.id)
    .then(locations => {
      if (!locations) {
        return res.status(400).send({
          message: 'Location Not Found',
        });
      }
      return locations
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

exports.update = function (req, res) {
  let id = req.params.id;
  locations.findById(id).then(locations => {
    if (!locations) {
      return res.status(400).send({
        message: 'Location Not Found',
      });
    }
    
    locations.city = req.body.city ;
    locations.address = req.body.address ;
    locations.telephone = req.body.telephone ;
    locations.email = req.body.email;

    locations.save(function(err) {
      if (err)
          res.send(err);

      res.json({ message: 'Location was updated!' });
    });
  });
};