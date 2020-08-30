/**
 * Rutas de Estacionamiento
 */
const express = require("express");
const cors = require("cors");
const services = require("./Services");
const Parking = express.Router();

Parking.use(express.urlencoded({ extended: false }));
Parking.use(express.json());
Parking.use(cors());

Parking.get("/", (req, res) => {
  services.getAll(res);
});

Parking.get("/:id", (req, res) => {
  services.getById(req.params, res);
});

module.exports = Parking;
