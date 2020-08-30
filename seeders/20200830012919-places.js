"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "Places",
      [
        {
          place_number: "Zona 1",
          capacity: 20,
          palm_roof: true,
          handicapped_seats: 0,
        },
        {
          place_number: "Zona 2",
          capacity: 20,
          palm_roof: true,
          handicapped_seats: 1,
        },
        {
          place_number: "Zona 3",
          capacity: 20,
          palm_roof: false,
          handicapped_seats: 2,
        },
        {
          place_number: "Zona 4",
          capacity: 20,
          palm_roof: false,
          handicapped_seats: 3,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Places", null, {});
  },
};
