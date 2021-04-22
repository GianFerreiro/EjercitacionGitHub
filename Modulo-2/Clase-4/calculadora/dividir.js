function dividir (numero1, numero2){
    if (numero1 == 0){
        return "no se puede dividir por cero"
    }else if (numero2 == 0){
        return "nose puede dividir por cero"
    }else{
        return numero1 / numero2
    }
}


module.exports = dividir;


