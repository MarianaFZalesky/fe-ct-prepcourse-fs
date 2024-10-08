function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
  if (Array.isArray(arr) && arr) { 
      return true;
    }
    return false;
  
}
console.log(esArrayNoVacio([1, 2, 3, 4]));
module.exports = esArrayNoVacio;