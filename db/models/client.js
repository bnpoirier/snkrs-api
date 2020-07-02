'use strict';

module.exports = (sequelize, DataTypes) => {

  const Client = sequelize.define('client', {
    firstName: DataTypes.STRING(75),
    lastName: DataTypes.STRING(75),
    email: DataTypes.STRING(75),
    address: DataTypes.STRING(255),
    city: DataTypes.STRING(75),
    zipCode: DataTypes.INTEGER(5)
  }, {});

  Client.associate = function(models) {
    Client.hasMany(models.Authentication, {foreignKey: 'clientId', as: 'authentications'})
  };

  return Client;
};