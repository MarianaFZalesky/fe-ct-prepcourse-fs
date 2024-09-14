function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
  return Number.isInteger(num)
};

console.log(esEntero(-7))
console.log(esEntero(6))
console.log(esEntero(9.7))

module.exports = esEntero;
