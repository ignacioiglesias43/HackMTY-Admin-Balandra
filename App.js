// Libs
const express = require("express");
const cors = require("cors");

// Components
const User = require("./components/Users/User");
const Reservation = require("./components/Reservations/Reservation");
const Place = require("./components/Places/Place");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Routes
app.use("/users", User.api);
app.use("/reservations", Reservation.api);
app.use("/places", Place.api);

app.listen(3000, () => {
  // Set up
  console.log("Servidor corriendo en puerto 3000");
});
