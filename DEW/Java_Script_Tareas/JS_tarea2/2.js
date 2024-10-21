function sum(...args) {
    if (args.length === 0) {
        console.error('No se a indicado un numero');
        return;
    }

    let total = 0;
    let aux = 1;

    for (let a of args) {
        if (typeof a === 'number') {
            total += a;
        } else {
            console.log(`¡AVISO! El argumento número ${aux} ${a} no es un número, lo ignoramos`);
        }
        aux++;
    }

    return total;
}

console.log(sum()); 
console.log(sum(1, 2, "hola")); 
