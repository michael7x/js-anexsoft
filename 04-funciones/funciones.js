function esPar(n){
    return (n % 2 === 0);
}

function saludar(nombre){
    console.log("Hola "+nombre);
}

function calcularNumerosPares(numeros){
    var respuesta = [];

    numero.forEach(function (x){
        if(esPar(x)){
            respuesta.push(x + ' es par');
        }else{
            respuesta.push(x + ' es impar');
        }
    });

    return respuesta;
}