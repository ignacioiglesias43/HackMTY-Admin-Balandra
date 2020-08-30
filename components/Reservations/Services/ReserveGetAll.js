const Parking = require("../../Parkings/ParkingDAL");
const Places = require("../../Places/PlaceDAL");
const User = require("../../Users/UserDAL");
const dal = require("../ReservationDAL");

module.exports = async (req, res) => {
  let status = 500;
  let response = {
    message: "Error al obtener las reservaciones.",
  };
  try {
    const reservations = await dal.findAll({
      include: [
        Parking,
        Places,
        { model: User, attributes: ["id", "name", "email"] },
      ],
      attributes: {
        exclude: ["PlaceId", "ParkingId", "UserId", "createdAt", "updatedAt"],
      },
    });
    if (reservations) {
      status = 200;
      response = {
        message: "Reservaciones obtenidas",
        reservations,
      };
    }
  } catch (error) {
    response = {
      message: error,
    };
  }
  res.status(status).json(response);
};
