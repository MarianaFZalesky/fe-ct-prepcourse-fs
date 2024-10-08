function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  const elementosVistos = new Set();

  for (let i = 0; i < numeros.length; i++) {
    if (elementosVistos.has(numeros[i])){ 
      return numeros[i]; //retorna el primer elemento repetido
    }
    elementosVistos.add (numeros[i]);
  }
  return null;
}

console.log(encontrarElementoRepetido([1, 2, 3, 1, 4, 5])); //2
console.log(encontrarElementoRepetido([1, 2, 3, 4, 5]));

module.exports = encontrarElementoRepetido;