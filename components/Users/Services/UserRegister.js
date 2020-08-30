/**
 * Registra a un usuario
 * @param {object} data
 * @param {string} data.name
 * @param {string} data.email
 * @param {string} data.password
 */
const dal = require("../UserDAL");
const { hashPassword } = require("../../../libs/utils");

module.exports = async ({ name, email, password }, res) => {
  let status = 500;
  let response = {
    message: "Error al registrar al usuario",
    parameters: ["name", "email", "password"],
  };
  if (name && email && password) {
    const existeUsuario = await dal.findOne({
      where: {
        email: email,
      },
    });
    if (!existeUsuario) {
      const user = await dal.create({
        name: name,
        email: email,
        password: hashPassword(password),
      });
      if (user && user instanceof dal) {
        status = 201;
        response = {
          message: "Registrado correctamente.",
          data: {
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
            },
          },
        };
      }
    } else {
      status = 500;
      response = {
        message: "Error al registrar al usuario, el correo ya existe.",
        parameters: ["name", "email", "password"],
      };
    }
  }

  res.status(status).json(response);
};
