/**
 * Rutas de Reservaciones
 */
const express = require("express");
const cors = require("cors");
const services = require("./Services");
const Reservation = express.Router();

Reservation.use(express.urlencoded({ extended: false }));
Reservation.use(express.json());
Reservation.use(cors());

Reservation.post("/", (req, res) => {
  services.reserve(req.body, res);
});

module.exports = Reservation;
