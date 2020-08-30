/**
 * Esta funcion sirve para realizar una reserva
 * @param {object} data
 * @param {number} data.userId
 * @param {number} data.placeId
 * @param {number} data.parkingId
 * @param {number} data.adults
 * @param {number} data.older_adults
 * @param {number} data.children
 * @param {number} data.handicapped
 * @param {string} data.date
 * @param {string} data.arrival
 * @param {string} data.departure
 */
const placeDAL = require("../../Places/PlaceDAL");
const dal = require("../ReservationDAL");
module.exports = async (
  {
    userId,
    placeId,
    parkingId,
    adults = 0,
    older_adults = 0,
    children = 0,
    handicapped = 0,
    date,
    arrival,
    departure,
  },
  res
) => {
  let status = 500;
  let response = {
    message: "Error al realizar su reservacion.",
  };
  if (userId && placeId && date && arrival && departure) {
    const place = await placeDAL.findOne({
      where: {
        id: placeId,
      },
    });
    if (adults + older_adults + children + handicapped <= place.capacity) {
      const reserve = await dal.create({
        userId,
        placeId,
        parkingId,
        adults,
        older_adults,
        children,
        handicapped,
        date,
        arrival,
        departure,
      });
      if (reserve) {
        status = 200;
        response = {
          message: "Su reservacion ha sido registrada con exito.",
          data: {
            reserve,
          },
        };
      } else {
        status = 400;
      }
    } else {
      status = 400;
    }
  }
  res.status(status).json(response);
};
