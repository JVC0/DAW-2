function findarriba(a) {
    if (!a.toLowerCase().includes("arriba")) {
        return "La palabra 'arriba' no está en el texto";
    }
    let new_text = a.replace(/arriba/gi, "abajo");
    return `La palabra 'arriba' fue encontrada\n${new_text}`;
}

console.log(findarriba("Arriba el ánimo, que todo va a salir bien. ¡Arriba!"));
