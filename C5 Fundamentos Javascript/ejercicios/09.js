const esNuloOIndefinido = undefined;
module.exports = esNuloOIndefinido

function mariann(valor) {
// console.log(valor);
 // Asegúrate de que la ruta sea correcta
 // Debería imprimir true
  // La función recibe un argumento llamado valor.
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Por ejemplo:
  // null ---> true 
  // undefined ---> true 
  // 22 ---> false
  // "texto" ---> false
  // Tu código:
  return valor === null || valor === undefined;
};
console.log(mariann(esNuloOIndefinido));