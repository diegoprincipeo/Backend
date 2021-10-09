class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

}

function getFullName(){
    return "Hola soy "+nombreT.nombre1+" "+apellidoT.apellido1;
}
const nombreT = {nombre1:'Diego',nombre2:'Andrea',nombre3:'Mariela'};
const apellidoT = {apellido1:'Principe', apellido2:'Velasquez',apellido3:'Romero'};

const libro1 = {libros1:'El ultimo deseo'};
const libro2 = {libros2:'La sangre de los elfos'};
const libro3 = {libros3:'La torre de la golondrina'};

const librosT = [libro1,libro2,libro3];

const mascotasT= ['Perro','Gato','Hamster'];

const usuarios = new Usuario (nombreT,apellidoT,librosT,mascotasT);

const saludo = getFullName();
console.log(saludo);
console.log(usuarios);
mascotasT.push(
    'Gato'
);
console.log(mascotasT)
const cantidad = Usuario.countMascotas();
