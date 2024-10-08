function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  const suma = resultadosTest.reduce((acumulador, elemento) => acumulador + elemento, 0);
  return suma / resultadosTest.length;
}
 console.log(promedioResultadosTest([10, 8, 7, 4, 10]));
 
module.exports = promedioResultadosTest;
