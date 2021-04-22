let fs = require ('fs');

let misFunciones = {
    lister: function(){
        let tareas = fs.readFileSync ('tareas.json', 'utf-8');
    }
}