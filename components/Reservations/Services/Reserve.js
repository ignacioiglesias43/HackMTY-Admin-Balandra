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
const jwt = require("jsonwebtoken");
const { jwtConfig } = require("../../../libs/utils");
module.exports = async (req, res) => {
  let status = 500;
  let response = {
    message: "Error al realizar su reservacion.",
  };
  const {
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
  } = JSON.parse(req);
  try {
    if (userId && placeId && date && arrival && departure) {
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
        const token = jwt.sign(
          {
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
          },
          jwtConfig.privateKey,
          {
            expiresIn: jwtConfig.expiration,
          }
        );
        if (token) {
          status = 200;
          response = {
            message: "Su reservacion ha sido registrada con exito.",
            data: {
              reserve,
            },
            token,
          };
        }
      }
    }
  } catch (error) {
    response = {
      message: error,
    };
  }
  res.status(status).json(response);
};
