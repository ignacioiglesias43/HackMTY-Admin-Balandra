/**
 * Rutas de Reservaciones
 */
const express = require("express");
const cors = require("cors");
const services = require("./Services");
const Reservation = express.Router();
const middleware = require("../Middleware");

Reservation.use(express.urlencoded({ extended: false }));
Reservation.use(express.json());
Reservation.use(cors());

Reservation.get("/reserve/:data", (req, res) => {
  services.reserve(req.params, res);
});

Reservation.get("/", (req, res) => {
  services.getAll(req, res);
});

Reservation.get("/:id", middleware, (req, res) => {
  services.getById(req.params, res);
});

module.exports = Reservation;
