"use strict";
module.exports = (sequelize, DataTypes) => {
  const Reservations = sequelize.define(
    "Reservations",
    {
      adults: DataTypes.INTEGER,
      older_adults: DataTypes.INTEGER,
      children: DataTypes.INTEGER,
      handicapped: DataTypes.INTEGER,
      date: DataTypes.DATE,
      arrival: DataTypes.TIME,
      departure: DataTypes.TIME,
    },
    {}
  );
  Reservations.associate = function (models) {
    Reservations.belongsTo(models.Parking);
    Reservations.belongsTo(models.Places);
    Reservations.belongsTo(models.User);
  };
  return Reservations;
};
