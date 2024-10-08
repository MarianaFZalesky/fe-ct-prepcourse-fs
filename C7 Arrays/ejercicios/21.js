function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  const mesesBuscados = ["Enero", "Marzo", "Noviembre"];
  const resultado = [];

  for (let i = 0; i < array.length; i++) {
    if (mesesBuscados.includes(array[i])){
       resultado.push(array[i]);
    }
     
  }

if (resultado.length === mesesBuscados.length){
  return resultado;
} else {
  return "No se encontraron los meses pedidos";
}
}
console.log(mesesDelAño(["Febrero", "Marzo", "Diciembre", "Enero", "Noviembre"]));
console.log(mesesDelAño(['Febrero', 'Marzo', 'Diciembre', 'Enero']));

module.exports = mesesDelAño;
