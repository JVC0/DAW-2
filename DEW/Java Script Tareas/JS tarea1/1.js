function validate(a, b, c) { 
    if (a < 0 || b < 0 || c < 0) {
        return "Error al menos una de las 3 variables es negativa ";
    }

    if (a === 0 && b === 0 && c === 0) {
        return "Error las tres variables son iguales a 0 ";
    }

    if ((a + b + c) > 10 && (a !== b && b !== c && a !== c)) {
        return "Error la suma de las 3 variables es mayor que 10 Y las tres variables son diferentes ";
    }
}

console.log(validate(3, -1, 5));
console.log(validate(0, 0, 0));   
console.log(validate(4, 3, 5));  
console.log(validate(1, 2, 3));