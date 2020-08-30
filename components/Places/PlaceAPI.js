/**
 * Rutas de Lugares
 */
const express = require("express");
const cors = require("cors");
const services = require("./Services");
const Place = express.Router();

Place.use(express.urlencoded({ extended: false }));
Place.use(express.json());
Place.use(cors());

Place.get("/", (req, res) => {
  services.getAll(res);
});

module.exports = Place;
