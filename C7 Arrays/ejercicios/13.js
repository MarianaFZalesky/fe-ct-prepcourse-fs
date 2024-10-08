function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  return array.filter(elemento => {
    return typeof elemento === 'number' && elemento % 2 === 0;
  })
}
console.log(filtrarNumerosPares([2, 3, 4]))
module.exports = filtrarNumerosPares;
