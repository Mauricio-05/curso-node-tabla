const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    desc: "Es la base de la tabla de multiplicar",
  })
  .check((argv, options) => {
    const { base } = argv;
    if (isNaN(base)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    desc: "Muestra la tabla de multiplicar",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    desc: "Es hasta donde va ir la tabla de multiplicar",
  })
  .check((argv, options) => {
    const { hasta } = argv;
    if (isNaN(hasta)) {
      throw "Es el limite de hasta donde va a ir la tabla de multiplicar";
    }

    return true;
  }).argv;

module.exports = argv;
