function count(text,letter){
    if (text === undefined || letter === undefined) {
        throw console.Error('Ambos argumentos son obligatorios.');
    }
    let count = 0
    for (let item of text) {
        if (letter === item){
            count++;
        }
    }
    return count;
}

 
console.log(count("holasseses2","s"))