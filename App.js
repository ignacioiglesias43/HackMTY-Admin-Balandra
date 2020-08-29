// Libs
const express = require("express");
const cors = require("cors");

// Components
const User = require("./components/Users/User");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Routes
app.use("/usuarios", User.api);

app.listen(3000, () => {
  // Set up
  console.log("Servidor corriendo en puesto 3000");
});
