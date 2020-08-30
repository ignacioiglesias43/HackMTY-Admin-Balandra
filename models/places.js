"use strict";
module.exports = (sequelize, DataTypes) => {
  const Places = sequelize.define(
    "Places",
    {
      lat: DataTypes.STRING,
      lon: DataTypes.STRING,
      place_number: DataTypes.STRING,
      palm_roof: DataTypes.BOOLEAN,
      capacity: DataTypes.INTEGER,
      handicapped_seats: DataTypes.INTEGER,
    },
    {}
  );
  Places.associate = function (models) {
    Places.hasMany(models.Reservations);
  };
  return Places;
};
