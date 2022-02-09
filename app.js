const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

crearArchivo(argv)
  .then((nombreArchivo) => {
    console.log(`Archivo ${nombreArchivo.rainbow} creado exitosamente`);
  })
  .catch((err) => {
    console.log(err);
  });
