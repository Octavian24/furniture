"use strict";

const products = require('../models').products;

exports.list = function (req, res) {
  products.findAll().then(products => {
    res.jsonp(products);
  }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
  products.create(req.body)
    .then(Product => res.jsonp(Product))
    .catch((error) => res.status(400).send(error));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  products.findById(id).then(products => {
    if (!products) {
      return res.status(400).send({
        message: 'Product Not Found',
      });
    }
    res.jsonp(products);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  products.findById(req.params.id)
    .then(products => {
      if (!products) {
        return res.status(400).send({
          message: 'Product Not Found',
        });
      }
      return products
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

exports.update = function (req, res) {
  let id = req.params.id;
  products.findById(id).then(products => {
    if (!products) {
      return res.status(400).send({
        message: 'Product Not Found',
      });
    }
    
    products.id_invoice = req.body.id_invoice ;
    products.price = req.body.price ;
    products.product_type = req.body.product_type ;

    products.save(function(err) {
      if (err)
          res.send(err);

      res.json({ message: 'Product was updated!' });
    });
  });
};