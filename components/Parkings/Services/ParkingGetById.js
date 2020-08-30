const dal = require("../ParkingDAL");

module.exports = async ({ id }, res) => {
  let status = 500;
  let response = {
    message: "Error al obtener informacion del estacionamiento",
  };
  const parking = await dal.findOne({
    where: {
      id: id,
    },
  });
  if (parking && parking instanceof dal) {
    status = 200;
    response = {
      message: "Estacionamiento obtenido",
      parking,
    };
  }
  res.status(status).json(response);
};
