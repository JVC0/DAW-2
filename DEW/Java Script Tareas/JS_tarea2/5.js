function DNI(a) {
    if (a < 0 || a > 99999999) {
        return "Número de DNI inválido";
    }
    const letrasdni = "TRWAGMYFPDXBNJZSQVHLCKET";
    let resta = a % 23;
    return letrasdni[resta];
}

console.log("La letra de tu DNI es: " + DNI(3784903));

console.log("La letra de tu DNI es: " + DNI(3784905553));