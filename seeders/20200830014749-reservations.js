"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "Reservations",
      [
        {
          userId: 1,
          placeId: 2,
          parkingId: 1,
          adults: 1,
          older_adults: 1,
          children: 1,
          handicapped: 0,
          date: "2020-08-31",
          arrival: "10:30:00",
          departure: "20:00:00",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reservations", null, {});
  },
};
