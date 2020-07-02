'use strict';
module.exports = (sequelize, DataTypes) => {

  const Authentication = sequelize.define('authentication', {
    brand: DataTypes.STRING(75),
    model: DataTypes.STRING(75),
    collectOn: DataTypes.DATE,
    returnOn: DataTypes.DATE
  }, {});

  Authentication.associate = function(models) {
    Authentication.belongsTo(models.Client, {as: "client"});
  };

  return Authentication;
};