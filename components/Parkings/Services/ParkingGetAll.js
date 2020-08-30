const dal = require("../ParkingDAL");
const Reservations = require("../../Reservations/ReservationDAL");

module.exports = async (res) => {
  let status = 500;
  let response = {
    message: "Error al obtener los estacionamientos",
  };
  try {
    const parkings = await dal.findAll({
      raw: true,
    });

    if (parkings) {
      const taken = await Reservations.findAll({
        raw: true,
        include: [{ model: dal }],
      });
      status = 200;
      response = {
        message: "Estacionamientos obtenidos",
        parkings,
        taken,
      };
    }
  } catch (error) {
    response = {
      message: error,
    };
  }
  res.status(status).json(response);
};
