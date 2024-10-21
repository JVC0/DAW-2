function rarray(nums = 10, min = 100, max = 200) {
    let array = [];
    for (let index = 0; index < nums; index++) {
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(random);
    }
    return array;
}

function squareroot(a){
    let array =[];
    for (let elemento of a) {
        array.push(Math.sqrt(elemento));
    }
    return array
}

console.log(squareroot(rarray(20,60,100)))
console.log(squareroot(rarray(20,60,100)))
