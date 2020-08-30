"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "Parkings",
      [
        {
          type_of_car: "Ninguno",
        },
        {
          type_of_car: "Automovil",
        },
        {
          type_of_car: "Camioneta",
        },
        {
          type_of_car: "Motocicleta",
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Parkings", null, {});
  },
};
