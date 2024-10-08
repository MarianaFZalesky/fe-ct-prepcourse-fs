function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  return array.reduce((contador, elemento) => {
    if (typeof elemento === 'number' && elemento > 10) {
      return contador +1;
    }
    return contador;
  }, 0);
}

console.log(contarElementosMayoresA10([5, 15, 25, 8, 12]))
module.exports = contarElementosMayoresA10;
