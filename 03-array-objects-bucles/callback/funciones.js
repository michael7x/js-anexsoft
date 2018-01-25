/*
function hagoAlgo(callback){
    callback();
}

hagoAlgo(function(){
    console.log("Hola ROCO !!");
});
*/

// Ahora si listo para continuar
// Recuerda que se deben dar 2 saltos de linea para añadir el comentario en VSCode
/*
function hagoAlgo(parametro){
    parametro("Hola Rokito !!");
}

hagoAlgo(function(valorQueMeSetearon){
    console.log(valorQueMeSetearon);
});
*/

function Sumar(a, b, callback){
    return callback(a+b);
}

document.querySelector("#operar").addEventListener('click', function(){
    var a = parseInt(document.querySelector("#a").value),
        b = parseInt(document.querySelector("#b").value);

    Sumar(a,b,function(r){
        console.log("El resultado es "+r);
    });    
});