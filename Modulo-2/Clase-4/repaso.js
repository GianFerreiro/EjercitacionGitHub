////////        funciones            //////////

function saludar (nombre){
    console.log ("bienvenido " + nombre);
}

saludar ("agustin");

function saludar2 (nombre){
    console.log("Bienvenido " + nombre);
    return "Bienvenido " + nombre
    console.log("Esto no se ejecuta porque hay un return antes")
}

saludar2 ("Gian")
console.log (saludar2("Franco"));


function esPar (n){
    if (n % 2 === 0){
        return "El numero " + n + "es par"
    }else {
        return "El numero " + n + "es impar" 
    }
}

function esPar1 (numero){
    if (numero == undefined){
        return "Por favor ingrese un numero para utilizar la funcion"
    }else if (numero % 2 == 0) {
        return "El numero " + numero + " es par" 
    }else {
        return "El numero " + numero + " es impar"
    }
}
console.log (esPar1(2));
console.log (esPar1());
console.log (esPar1(7));

