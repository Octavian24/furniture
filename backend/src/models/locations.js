'use strict';
module.exports = (sequelize, DataTypes) => {
  var locations = sequelize.define('locations', {
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    telephone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return locations;
};