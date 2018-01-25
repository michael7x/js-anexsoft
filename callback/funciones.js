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

function hagoAlgo(parametro){
    parametro("Hola Rokito !!");
}

hagoAlgo(function(valorQueMeSetearon){
    console.log(valorQueMeSetearon);
});