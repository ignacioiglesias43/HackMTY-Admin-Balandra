"use strict";
const { hashPassword } = require("../libs/utils");
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      */
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Ignacio Iglesias Campoy",
          email: "iiglesiascampoy@gmail.com",
          password: hashPassword("holamundo123"),
        },
        {
          name: "Esmeralda Rubin Fausto",
          email: "rubin.esmef@gmail.com",
          password: hashPassword("holamundo123"),
        },
        {
          name: "Darien Ramirez Chaidez",
          email: "darien_ramirez1012@hotmail.com",
          password: hashPassword("holamundo123"),
        },
        {
          name: "Jose Manuel Verdugo Burgoin",
          email: "makoy@gmail.com",
          password: hashPassword("holamundo123"),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
