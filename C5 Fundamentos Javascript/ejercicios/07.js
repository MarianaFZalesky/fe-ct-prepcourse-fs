

function esTipoDato(valor) { 
  // La función recibe un argumento llamado valor.
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  return typeof valor;
}
  const Mistring = "hola";
  const Minumber = 10;
  const Miboolean = true;
  const Miobjet = {nombre: "felipa"};

 console.log(esTipoDato(Mistring));
 console.log(esTipoDato(Minumber));
 console.log(esTipoDato(Miboolean));
 console.log(esTipoDato(Miobjet));

// typeof devuelve el tipo de dato que originalmente es.

module.exports = esTipoDato;
