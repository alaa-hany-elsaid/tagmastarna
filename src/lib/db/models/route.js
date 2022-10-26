'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Route.belongsToMany(models.Station, {
          through : models.RouteStation
        })
        Route.hasMany(models.TimeTable);


    }
  }
  Route.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Route',
  });
  return Route;
};