function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null; // Devuelve null si el array esta vacio.
  }
  // ordena el array de numeros
  numeros.sort ((a,b) => a-b);

  //recorre el array para encontrar el numero faltante

  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros [i + 1] !== numeros[i] + 1) {
      return numeros[i] + 1; //retoma el numero faltante
    }
  }
  return null; // devuelve null si no hay 
}

 console.log(encontrarNumeroFaltante([1, 2, 4, 5])); //llamada: 3
 console.log(encontrarNumeroFaltante([1, 2, 3, 4, 5, ])); //null
 console.log(encontrarNumeroFaltante([])); // null

module.exports = encontrarNumeroFaltante;