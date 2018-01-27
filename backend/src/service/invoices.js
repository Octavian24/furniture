"use strict";

const invoices = require('../models').invoices;

exports.list = function (req, res) {
  invoices.findAll().then(invoices => {
    res.jsonp(invoices);
  }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
  invoices.create(req.body)
    .then(Invoice => res.jsonp(Invoice))
    .catch((error) => res.status(400).send(error));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  invoices.findById(id).then(invoices => {
    if (!invoices) {
      return res.status(400).send({
        message: 'Invoice Not Found',
      });
    }
    res.jsonp(invoices);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  invoices.findById(req.params.id)
    .then(invoices => {
      if (!invoices) {
        return res.status(400).send({
          message: 'Invoice Not Found',
        });
      }
      return invoices
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

exports.update = function (req, res) {
  let id = req.params.id;
  invoices.findById(id).then(invoices => {
    if (!invoices) {
      return res.status(400).send({
        message: 'Invoice Not Found',
      });
    }
    invoices.id_employee = req.body.id_employee ; 
    invoices.id_client = req.body.id_client ;
    invoices.date = req.body.date ;
    invoices.amount = req.body.amount ;
    

    invoices.save(function(err) {
      if (err)
          res.send(err);

      res.json({ message: 'Invoice was updated!' });
    });
  });
};