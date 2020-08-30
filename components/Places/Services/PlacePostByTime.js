const dal = require("../PlaceDAL");
const rDAL = require("../../Reservations/ReservationDAL");
const moment = require("moment");
module.exports = async ({ date, arrival, departure }, res) => {
  let status = 500;
  let response = {
    message: "Error al obtener informacion del lugar",
  };
  const reservation = await rDAL.findAll({ raw: true, queryWhere: { date } });
  const ar = moment(arrival.replace("-", ""), "YYYYMMDD");
  const dep = moment(departure.replace("-", ""), "YYYYMMDD");
  console.log(dep.diff(ar, "s"));
  if (reservation) {
    code = 200;

    // const unTaken = reservation.filter(r => );
  } else {
    code = 200;
    response = {
      message: "No hay zonas apartadas",
      places: [],
    };
  }
  res.status(status).json(response);
};
