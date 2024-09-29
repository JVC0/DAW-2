function mays(text) {
    if (text === text.toUpperCase()) {
        return "Todas las letras son mayúsculas";
    } else if (text === text.toLowerCase()) {
        return "Todas las letras son minúsculas";
    } else {
        return "El texto contiene una combinación de mayúsculas y minúsculas";
    }
}

console.log(mays("HOLA")); 
console.log(mays("hola"));
console.log(mays("Hola")); 