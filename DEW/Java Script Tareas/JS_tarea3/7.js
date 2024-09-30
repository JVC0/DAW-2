function rarray(nums = 10, min = 100, max = 200) {
    let array = [];
    for (let index = 0; index < nums; index++) {
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        if (array.includes(random)) {
            console.log("se trata de un elemento repetido");
        } else {
            console.log("es la primera vez que aparece");
        }
        array.push(random);
    }
    return array;
}

console.log(rarray(50, 10, 20));
