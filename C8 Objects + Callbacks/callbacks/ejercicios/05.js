function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
  for ( let i = 0; i < array.length; i++) {
    cb (array[i]);
  }
}
function imprimrElemento(elemento) {
  console.log(elemento);
}
 forEach([ 1, 2, 3, 4, 5], imprimrElemento);
module.exports = forEach;
