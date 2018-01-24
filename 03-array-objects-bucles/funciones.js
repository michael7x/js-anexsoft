var vector = ['a',1,2,'pepe',false];

var objeto = {
    nombre : 'pepe', 
    edad : 26, 
    datos : [1,2,3], 
    nuevo_objeto: { edad : 26, sexo : 'masculino'},
    saludar : function(){ 
        return 'Hola mundo'; 
    },
    sumar : function(x, y){ 
        return x + y; 
    }
};

var vectorObj = [];
vectorObj.push({ edad : 26, sexo : 'masculino'});


var array1 = [
    'pepe',
    'ronal',
    'andy',
    'david'
];

array1.forEach(function(x, i, vec){
    console.log(x);
    console.log(i);
    console.log(vec);
});
