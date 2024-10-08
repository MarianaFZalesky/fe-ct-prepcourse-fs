function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  return array.reduce((indiceMayor, elemento, indiceActual, arr) =>{
    return elemento > arr[indiceMayor] ? indiceActual : indiceMayor;
  }, 0);
}

 console.log(encontrarIndiceMayor([5, 15, 25, 8, 12]));

 console.log(encontrarIndiceMayor([-1, -2, -3, -4, -5]));

module.exports = encontrarIndiceMayor;
