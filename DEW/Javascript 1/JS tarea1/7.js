function naciste(fecha, unidad) {
    const fechaNacimiento = new Date(fecha);
    const ahora = new Date();

    const diferenciaMs = ahora - fechaNacimiento;

    let fechaenunidad;
    switch (unidad) {
        case 's':
            fechaenunidad = Math.floor(diferenciaMs / 1000); 
            break;
        case 'm':
            fechaenunidad = Math.floor(diferenciaMs / (1000 * 60));
            break;
        case 'h':
            fechaenunidad = Math.floor(diferenciaMs / (1000 * 60 * 60)); 
            break;
        case 'd':
            fechaenunidad = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24)); 
            break;
        default:
            console.error('Unidad no válida.');
            break
    }
    
    return fechaenunidad;
}

console.log(naciste('2000-01-01', 'd')); 
console.log(naciste('2000-01-01', 'h')); 
console.log(naciste('2000-01-01', 'm')); 
console.log(naciste('2000-01-01', 's'));
console.log(naciste('2000-01-01', 'o'));