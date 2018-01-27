'use strict';
module.exports = (sequelize, DataTypes) => {
  var products = sequelize.define('products', {
    id_invoice: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    product_type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return products;
};