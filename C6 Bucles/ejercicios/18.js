function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = 1;
  for (let i = a; i <= b; i++){
    producto *=i;
  }
  return producto;
};

console.log(productoEntreNúmeros(1,3))
console.log(productoEntreNúmeros(2,2))
console.log(productoEntreNúmeros(-2,1))

module.exports = productoEntreNúmeros;