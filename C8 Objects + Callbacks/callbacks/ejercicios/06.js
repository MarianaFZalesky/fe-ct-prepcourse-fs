function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  const newArray =[];

  for ( let i = 0;i < array.length; i++) {
   newArray,push(cb (array[i])) ;
  }
  return newArray;
}

function duplicar(num) {
  return num*2;

}

console.log([1, 2, 3, 4, 5])

module.exports = map;