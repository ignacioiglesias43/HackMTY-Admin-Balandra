const dal = require("../ReservationDAL");
const Parking = require("../../Parkings/ParkingDAL");
const Place = require("../../Places/PlaceDAL");
const User = require("../../Users/UserDAL");

module.exports = async ({ id }, res) => {
  let status = 500;
  let response = {
    message: "Error al obtener informacion de la reservacion",
  };
  try {
    const reservation = await dal.findOne({
      where: {
        id,
      },
      include: [
        Parking,
        Place,
        { model: User, attributes: ["id", "name", "email"] },
      ],
      attributes: {
        exclude: [
          "PlaceId",
          "ParkingId",
          "UserId",
          "createdAt",
          "updatedAt",
          "User",
        ],
      },
    });
    if (reservation && reservation instanceof dal) {
      status = 200;
      response = {
        message: "Reservacion obtenida",
        reservation,
      };
    }
  } catch (error) {
    response = {
      message: error,
    };
  }
  res.status(status).json(response);
};
