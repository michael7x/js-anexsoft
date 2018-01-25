function Usuario(id, nombre, edad){
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;

    this.saludar = function(){
        return 'Hola, soy '+this.nombre;
    }

    function correr(){
        return 'Estoy corriendo';
    }
}

var usuario1 = new Usuario(1,'Michael', 26),
    usuario2 = new Usuario(2,'Andrea', 27);