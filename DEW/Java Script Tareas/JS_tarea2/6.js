function separete(a = "", b = ",") {
    let split = a.split(b);
    let numelem = split.length; 
    let result = `Se han detectado ${numelem}:\n`;
    for (let i = 0; i < numelem; i++) {
        result += `Elemento ${i + 1}: ${split[i]}\n`; 
    }
    return result;
}



console.log(separete("coche|rojo|10 años|diesel|5 puertas|hola", "|"));
