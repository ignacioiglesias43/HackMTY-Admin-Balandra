// Libs
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// Components
const User = require("./components/Users/User");
const Reservation = require("./components/Reservations/Reservation");
const Place = require("./components/Places/Place");
const Parking = require("./components/Parkings/Parking");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// Routes
app.use("/users", User.api);
app.use("/reservations", Reservation.api);
app.use("/places", Place.api);
app.use("/parking", Parking.api);

app.listen(3000, () => {
  // Set up
  console.log("Servidor corriendo en puerto 3000");
});
