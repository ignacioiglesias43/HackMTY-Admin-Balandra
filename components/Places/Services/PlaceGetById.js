const dal = require("../PlaceDAL");

module.exports = async ({ id }, res) => {
  let status = 500;
  let response = {
    message: "Error al obtener informacion del lugar",
  };
  const place = await dal.findOne({
    where: {
      id: id,
    },
  });
  if (place && place instanceof dal) {
    status = 200;
    response = {
      message: "Lugar obtenido",
      place,
    };
  }
  res.status(status).json(response);
};
