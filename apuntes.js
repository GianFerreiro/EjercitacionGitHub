console.log ("bienvenidos a Node.js");

let numero = 6
console.log (numero ++)

// comparacion simple
console.log (5 == "5")

// comparacion estricta 
console.log (5 === "5")

// desigualdad simple 
console.log (5 != "5")

// desigualdad estricta 
console.log (5 !== "5")

// funciones 
// scope local
function hola(){
    let saludar = "Hola, que tal?"
    return saludar;
}
console.log(hola())
//console.log (saludar);

//scope global
let elMejorSaludo = "javascrip es lo mas"
function estoyAprendiendo (){
    return elMejorSaludo
}
console.log (estoyAprendiendo());

// funcion
function ejemplo (){
    return string = "hola, soy una función"
}
console.log (ejemplo());

// funcion expresada
let ejemplo1 = function (){
    return string = "hola, soy una función expresada"
}
console.log (ejemplo1()); 

// funcion con parametros
function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' + apellido + '!';
}
console.log (saludar("Gian", "Ferreiro"));

// funcion para ver si es par
function esPar (n){
    return (n % 2 === 0);
}
console.log(esPar(6));

// declarandot tres funciones
function anterior (number){
    return number - 1
}
function triple (number1){
    return number1 * 3
}
function anteriorDelTriple (n){
    let porTres = triple(n);
    return anterior (porTres);
    }
console.log (anteriorDelTriple(10));

// condicionales (if)

let clima = "Soleado"
let dia = "Martes";

if (clima == "Soleado" && dia == "Domingo"){
    console.log ("Lindo dia para pasear")
}else if (clima == "Soleado" && dia == "Lunes"){
    console.log ("Pdria salir igual");
}else {
    console.log ("Mejor me quedo en casa");
}

// array 

let notas = [3,4,5,6,7,8,8,8]
console.log (notas);

// push (agregar)
notas.push (1,3);
//console.log (notas)

// pop (ultimo elemento)

let elUltimo = notas.pop ();
//console.log (notas);
//console.log (elUltimo);

// shift (para extraer el primer elemento)

notas.shift ();
notas.shift ();
// unshigt para insertar un elemento al principio
notas.unshift (9);
// console.log (notas);

// indexOf -- deuelve el indice donde se encuentra el valor buscado, si devuelve -1 es que no fue encontrado en el array 
let tabla = [4,5,6,7,8,8]
let posicionDelOcho = tabla.indexOf (8);
console.log (posicionDelOcho);

// lastIndexOf -- comienza a buscar el valor buscado desde el final del Array
let lastPosicionDelOcho = tabla.lastIndexOf(8);
console.log (lastPosicionDelOcho)

// join para unificar todos los elementos presentes en un array
let guia = [4,5,6,7,8,8];
let resultadoJuntado = guia.join ("**");

console.log (resultadoJuntado)

// playground
let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ]
  estudiantes.push({
      nombre: "Juan",
      promedio: 5,
      curso: "iOS",
  })

  console.log (estudiantes);

/*¿Para qué sirve una variable?
       - Una variable es un espacio de memoria en la computadora donde podemos almacenar distintos tipos de datos
 En la vida real, ¿qué sería una variable?
       -
¿Cuáles son los distintos tipos de datos?
       -numericos, string, booleano, object, array, NaN, Null, Undefined 
 ¿Con qué operadores trabaja JavaScript?
       -
 ¿Para qué utilizamos las funciones? ¿Cuál es la diferencia entre ejecutar y declarar una función?
       -
¿Para qué sirven los condicionales? ¿En qué situaciones se usan?
       -
¿Qué son los arrays? ¿Cuáles son sus métodos?
       - 
*/

// formato json.js   // 

let amigos = ["coco", "pablito", "Franco", "juan"];

let amigosJSON = JSON.stringify (amigos);

let amigosOriginal = JSON.parse(amigosJSON);

console.log (amigosJSON);
console.log (amigosOriginal);
//
let persona = {
    nombre: "Carli",
    edad: 24,
    domicilio: "calle falsa 123"
}

let personasJSON = JSON.stringify(persona);
let personasOriginal = JSON.parse (personasJSON);
console.log(personasJSON);
console.log (personasOriginal);

/// string
//string length devuelve en numeros todo el largo del string
let mensaje = "Gran dia para practicar Javascript!";
console.log (mensaje.length);
// string indexOf te devuelve en que indice se encuentra la palabra buscada
console.log (mensaje.indexOf("dia"));
// string de slice 
console.log (mensaje.slice(8, 24));
// string trim() elimina los espacios en blanco antes y despues de la primera incurrencia
console.log(mensaje.trim());
// string split convierte un string en un array 
let frase = "braking bad Rules!"
console.log (frase.slice(-10));
console.log(mensaje.split(" "));
//replace permite remplazar una porcion de texto dentro de un string
console.log (mensaje.replace("Javascript", "todo"));


/*
function menciona (texto, palabra){
    return texto.indexOf(palabra)
}
console.log(menciona("hola que tal", "tal"));
*/

function menciona (texto, palabra){
    if (texto.indexOf(palabra) == -1){
        return false
    }else{
        return true
    }
}
console.log(menciona("Existen muchos lenguajes de programación y JavaScript es uno de ellos", "progrmacion"));

// OBJETOS LITERALES ///

let curso = {
    cantidadDeAlumnos: 32,
    docentes: ["Gian", "Javier"],
    horario: "De 19 a 21hs",
    notificaciones: function(){
        return "el horario de la cursada es" + this.horario;
    }
}

console.log(curso);
console.log (curso.cantidadDeAlumnos);
console.log (curso.notificaciones());


function Curso (cantidadDeAlumnos, docentes, horario){
    this.cantidadDeAlumnos = cantidadDeAlumnos
    this.docentes = docentes
    this.horario = horario
}

let cursoDeProgramacion = new Curso(50,["Javier", "Gerardo"], "de 19 a 21hs");
let cursoDeMarketing = new Curso(45,["Diego", "Matias"], "de 19 a 21hs");

console.log(cursoDeProgramacion)
console.log (cursoDeMarketing);

// arrow-functions

let laMitad = numero => numero /2;
console.log(laMitad(8));

let dividir = (numeroA, numeroB) => numeroA / numeroB;
console.log(dividir(20,4));

let tengoQueTRabajar = dia => {
    if (dia == 'sabado' || dia == 'domino'){
        return 'no tenes que trasbjar';
    }else{
        return 'Si tenes que ir a trabajar'
    }
}
console.log (tengoQueTRabajar('lunes'));


let dameCinco = () => [1,2,3,4,5];

console.log(dameCinco())

let mostrarNombre = () => "Mi nombre es Hernán"
console.log(mostrarNombre());

/// condicionales ///
/// if ternario no llevan llaves, if ni el, se escribe todo en la misma linea 

let fruta = 'Naranja';
let resultado = fruta == 'Manzana'? 'Buenisimo, me gustan las manzanas': 'ufa, queria manzana';
console.log(resultado);

// switch  pregunta por algo y si es verdadero ejecuta un bloque de codigo
let semaforo = 'Rojo';

switch(semaforo){
    case 'verde':
        console.log('Puedo cruzar');
        break
    case 'Amarillo':
        console.log('Precaucion');
        break;
    case 'Rojo':
        console.log('No cruces, hay que esperar');
        break;
    default:
        console.log('No funciona el semaforo');
}

switch  (dia) {	
	case 'viernes':
    	console.log('buen finde');
		break;
	case 'lunes':
    	console.log('buena semana');
		break;
	default:
    	console.log('buen dia');
		break
}

let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let bicicletaConRodadoGrande = bicicletaA.rodado > bicicletaB.rodado ? bicicletaA : bicicletaB

console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );

// ciclo for
// for
for (let i = 0; i<10; i++){
    console.log('El valor de i es igual a: ' + i);
}

function loro (palabra){
    for (let i = 1; i <= 5; i++){
    console.log(palabra);
}
}
console.log(loro('hola'));


function noParesDeContarImparesHasta(numero){
    let contador = 0
    for (let i = 0; i<= numero; i++){
        if (i % 2 != 0){
            contador++
        } 
    }
    return contador
}
console.log (noParesDeContarImparesHasta(10));

// callbakcs //
let sumar = (n1, n2) => n1 + n2;
let restar = (n1, n2) => n1 - n2;
let multiplicar = (n1, n2) => n1 * n2;
let dividir2 = (n1, n2) => n1 / n2;

let calculadora =  (n1, n2, operacion) => operacion (n1, n2);

console.log (calculadora(18,3, sumar));

let doble = (n1) => n1 * 2;
let porTres = (n1) => n1 * 3;
let aplicarCallback = (n1, callback) => callback (n1);

console.log (aplicarCallback(10, porTres));

// metodos de array 
// map
let notas2 = [10, 4, 5, 8, 9, 2, 7];
let notasHatstaEl100 = notas2.map (function(numero){
    return numero * 10;
});
//console.log(notasHatstaEl100);
//filter //
let notasAprobadas = notas2.filter(function(numero){
    return numero >= 7
})
//console.log (notasAprobadas);

// reduce // 
let sumaNotas = notas2.reduce (function(estado, numero){
    return estado + numero
})
// console.log(sumaNotas);

// forEach//
notas2.forEach (function(valor, indice){
    console.log (indice);
    console.log (valor);
})

// objeto date
//get day devuelve el numero al dia de la semana ej domingo = 0 ; miercoles = 3
//getDate el dia del mes en curso 
//getmonth te devuelve el mes, mes errado ya que comienza en 0; ej enero =0 
//getfullYear te deuvelve el numero de anio completo 

let fechaActual = new Date ();
/*
console.log (fechaActual);
console.log (fechaActual.getFullYear());
console.log (fechaActual.toUTCString());
console.log (fechaActual.getMonth());
console.log (fechaActual.getDay());
console.log (fechaActual.getDate());
*/
let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth();
let diaHoy = fechaActual.getDate();
 
let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre'];

console.log ('hoy es el ' + diaHoy + ' de ' + meses[mes] +  ' de ' + anio);


// detrscturing 
let cursos = ['progrmacion', 'mkt', 'ux', ' data science', 'ux'];
// destructuracion de Attay
let [progrmacion, mkt] = cursos; 

console.log (cursos);
console.log (progrmacion);
console.log (mkt);


// destructuracion de objeto literal
let persona2 = {
    nombre: 'gian',
    edad: 24,
    domicilio: 'calle falsa 123'
}

let {nombre, edad} = persona;
console.log (persona);
console.log (nombre);
console.log (edad);

// spreadOperator juntar dos arrays, obejtos literales o funciones distintos
// juntar array
let peliculasAccion = ['end Game', 'Iron Man 3', 'Capitan America'];
let peliculasComedia = ['mi pobre angelito', 'que paso ayer?'];

let peliculas = [...peliculasAccion, ...peliculasComedia];
console.log(peliculas)
// juntar objetos literales
let generoComedias = {
    nombreGenero: 'Comedia',
    popularidad: 3
}

let miPobreAngelito ={
    nombre: 'Mi pobre Angelito',
    duracion: 120,
    ...generoComedias
}

let quePasoAyer = {
    nombre: 'Que paso Ayer?',
    duracion: 110,
    ...generoComedias
}
console.log (miPobreAngelito);
console.log(quePasoAyer);
// juntar funciones
function peliculasVistas (...nombresDePeliculas){
    for ( let i = 0; i < nombresDePeliculas.length; i++){
        console.log('La persona ya vio ' + nombresDePeliculas[i])
    }
}

peliculasVistas('End Game', 'Iron Man 3', 'Mi Pobre Angelito');