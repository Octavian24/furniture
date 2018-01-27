'use strict';
module.exports = (sequelize, DataTypes) => {
  var invoices = sequelize.define('invoices', {
    id_employee: DataTypes.INTEGER,
    id_client: DataTypes.INTEGER,
    date: DataTypes.DATE,
    amount: DataTypes.DOUBLE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return invoices;
};