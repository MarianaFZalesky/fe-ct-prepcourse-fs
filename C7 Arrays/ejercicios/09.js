function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   const indiceoleatorio = math.floor(math.random() * array.length);
   return array[indiceoleatorio];
};
console.log(obtenerElementoAleatorio([1, 2, 3, 4, 5]));

module.exports = obtenerElementoAleatorio;
