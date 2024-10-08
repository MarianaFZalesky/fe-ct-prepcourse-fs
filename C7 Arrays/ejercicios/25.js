function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let contador = 0;
  
  for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 !== 0) {
    continue;     //omitir los numeros impares
  }
  contador++;
}
return contador;
}

console.log(contarParesConContinue([1, 2, 3, 4, 5, 6,]));
console.log(contarParesConContinue([7, 8, 9, 10, 11, 12]));

module.exports = contarParesConContinue;
