"use strict";
module.exports = (sequelize, DataTypes) => {
  const Parking = sequelize.define(
    "Parking",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type_of_car: DataTypes.STRING,
    },
    {}
  );
  Parking.associate = function (models) {
    Parking.hasMany(models.Reservations);
  };
  return Parking;
};
