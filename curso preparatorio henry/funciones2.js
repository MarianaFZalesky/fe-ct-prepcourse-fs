function cuidadoconelconsolelog(nombre) {
    console.log(nombre);
  return nombre;
}

function otrafuncion() { 
    ("el nombre retornadopor la funcion 'cuidadoconelconsolelog´ es: " + cuidadoconelconsolelog( 'mariana'));

};
function cuidadoconretum(nombre) {
  return nombre;
    console.log(nombre);
    
}
  
//Función: sumaTres
var sumaTres = (x) => {
    return x + 3;
  }

//Función: cuidadoConElConsoleLog
function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
  }  
//Precedencia de valores
var a = 1;
var b = 2;
var c = a = b;
console.log (c);