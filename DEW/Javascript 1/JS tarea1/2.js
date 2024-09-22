function contar(x){

    if (x === 2 || x === 4 || x === 6) {
        return "El número es par";
    }
    if (x === 1 || x === 3 || x === 5) {
        return "El número es impar";
    }
    if (x === 0) {
        return "Este es muy fácil… ¡prueba otro!";
    }
    if (x > 6 || x < 0) {
        return "¡¡Sólo sé contar de 0 a 6!!";
    }

}
console.log(contar(-1));
console.log(contar(3));
console.log(contar(2));
console.log(contar(0));