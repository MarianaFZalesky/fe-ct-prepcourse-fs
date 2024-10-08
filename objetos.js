var deportes = {
    ConBalon: ['Football', 'Basketball', 'Rugbi'],
sinBalon: ['Boxeo', 'Surf', 'Trekking'],
};
 var persona = { nombre: 'Lucas', edad: 26, estudios: {esProgramador: true}};

 //console.log(persona.edad)

persona.nombre ='Martin'; // de esta manera cambiamos los valore de la propiedad del objeto.
//console.log(persona.nombre)

// ahora vamos a crear propiedades pensando que valores o informacion necesitamos: primero el nombre y luego el valor que tendra.

 //var auto = {};
//auto.marcas = [ 'Ford', 'Audi', 'Ferrari'];

//delete auto.marcas; // para borrar.

//console.log(auto);

//var misFunciones = {
  //  saludar: function () {
    //    console.log('hola');  
//},
//};
//misFunciones.saludar();

var atuendos = { manos: [ 'guantes','Anillos'], pies: ['Zapatos', 'Soquetes'] };
//console.log(atuendos.manos);

atuendos["piernas"] = ['Bermudas', 'Pantalones'];
//console.log(atuendos);

var comidas = {};
var diferenciaDeNotaciones = function (propUno, propDos) {
    comidas.propUno = ['Frutas', 'Vegetales'];
    comidas[propDos] = [ 'Hamburguesa', 'Papas Fritas'];
}
diferenciaDeNotaciones('saludable', 'nosaludable');
console.log(comidas);