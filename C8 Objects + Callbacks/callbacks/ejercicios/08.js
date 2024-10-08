const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  for (let i = 0; i < array.length; i++ ){
    if (callback(array[i])) {
      return array[i];
    }
  }
  return "no se encontro ningun elemento";
  
}
const esIgualA3 = (elemento) => elemento === 3;

console.log(buscarElemento([1, 2, 3, 4, 4, 5], esIgualA3))

module.exports = buscarElemento;
