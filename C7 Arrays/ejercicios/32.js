function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  const textoLimpio = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const textoInvertido = textoLimpio.split('').reverse().join('');
    return textoLimpio === textoInvertido;
}

console.log(esPalindromo('A man, a plan, a canal, Panama'));
console.log(esPalindromo('Hola mundo'));
module.exports = esPalindromo;