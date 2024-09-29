function div(a,b){
    let resultado = 0
    if (typeof(a) === "number" && typeof(b) === "number") {
        if (b === 0){
            throw new Error('No se puede dividir por cero');
            
        }
        resultado = a / b
        if (isNaN(resultado)){
            return "El resultado no es un número.";
        }
        return resultado
    }
    throw new Error('Uno de los valores no es un número o no ha sido definido');
    
    
}

console.log(div(10, 2)); 
console.log(div(10, 0)); 
console.log(div(10, 'a')); 