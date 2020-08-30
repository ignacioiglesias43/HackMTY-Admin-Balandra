const dal = require("../ParkingDAL");

module.exports = async (res) => {
  let status = 500;
  let response = {
    message: "Error al obtener los estacionamientos",
  };
  try {
    const parkings = await dal.findAll({ raw: true });
    if (parkings) {
      status = 200;
      response = {
        message: "Estacionamientos obtenidos",
        parkings,
      };
    }
  } catch (error) {
    response = {
      message: error,
    };
  }
  res.status(status).json(response);
};
