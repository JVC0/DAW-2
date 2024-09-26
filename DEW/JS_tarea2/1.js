function count(text,letter){
    let count = 0
    for (let item of text) {
        if (letter === item){
            count++;
        }
    }
    return count;
}

console.log(count("holasseses2","s"))