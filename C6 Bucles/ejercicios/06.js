function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if (num >= 100 && num <= 999) {
    return true;  
  } else { 
    return false;
  }
};
console.log(tieneTresDigitos(130));
console.log(tieneTresDigitos(1200));

module.exports = tieneTresDigitos;
