const { writeFileSync } = require("fs");
const colors = require("colors");

const crearArchivo = async ({ base = 1, listar = false, hasta = 10 }) => {
  try {
    let salida = "",
      consola = "";

    for (let index = 1; index <= hasta; index++) {
      salida += `${base} X ${index} = ${base * index} \n`;
      consola += `${base} ${"X".red} ${index} ${"=".red} ${base * index} \n`;
    }

    if (listar) {
      console.log("======================".green);
      console.log(`     ${"Tabla del".green} : ${colors.blue(base)}`);
      console.log("======================".green);
      console.log(consola);
    }

    writeFileSync(`./salida/tablaMultiplicar-${base}.txt`, salida);

    return `tablaMultiplicar-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
