String.prototype.isEmptyOrNull = function(){
    if(this === null) return true
    if(this.trim().length === 0) return true;
    return false;
}

//console.log("hola mundo".isEmptyOrNull());

Number.prototype.pad = function(){
    var pad = '000';
    return (pad + this.toString()).slice(-pad.length);
}

Array.prototype.where = function(key, value){
    var result = [];
    this.forEach(function (object, index){
        if(object[key].toLowerCase().indexOf(value.toLowerCase()) > -1){
            result.push(object);
        }
    });
    return result;
}

Array.prototype.firstOrDefault = function(){
    return this.length > 0 ? this[0] : null;
}

Array.prototype.lastOrDefault = function(){
    return this.length > 0 ? this[this.length - 1] : null;
}

var users = [
    { Nombre : 'Eduardo Rodríguez', Edad : 26 },
    { Nombre : 'Michael Roco', Edad : 26 },
    { Nombre : 'Andrea G.', Edad : 27 },
    { Nombre : 'Katy', Edad : 28 }
];

console.log(
    users.where('Nombre','Roco').lastOrDefault()
);