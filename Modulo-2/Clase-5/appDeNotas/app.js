let fs = require ('fs');

let tareas = fs.readFileSync ('tareas.json', 'utf-8');

// console.log (tareas);

tareas = JSON.parse (tareas);

// console.log (tareas);

let accion = process.argv[2]

// console.log(accion);

switch (accion){
    case 'listar':
        console.log(tareas);
        break;
    case undefined:
        console.log ('Atención - Tienes que pasar una acción.');
        break;
    default:
        console.log ('No entiendo qué quieres hacer.') ;
        break;
}

