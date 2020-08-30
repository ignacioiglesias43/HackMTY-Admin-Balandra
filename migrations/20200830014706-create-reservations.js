"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Reservations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      place_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "places",
          key: "id",
        },
      },
      parking_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "parkings",
          key: "id",
        },
      },
      adults: {
        type: Sequelize.INTEGER,
      },
      older_adults: {
        type: Sequelize.INTEGER,
      },
      children: {
        type: Sequelize.INTEGER,
      },
      handicapped: {
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATE,
      },
      arrival: {
        type: Sequelize.TIME,
      },
      departure: {
        type: Sequelize.TIME,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Reservations");
  },
};
