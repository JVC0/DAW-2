function rarray(nums = 10, min = 100, max = 200) {
    let array = [];
    for (let index = 0; index < nums; index++) {
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(random);
    }
    return array;
}

function gestionarArray(array) {
    let nuevoArray = [];
    array.forEach(x => {
        if (x <= -5) {
            nuevoArray.shift(); 
        } else if (x > -5 && x <= 0) {
            nuevoArray.pop(); 
        } else if (x > 0 && x <= 10) {
            nuevoArray.unshift(x);
        } else if (x > 10) {
            nuevoArray.push(x); 
        }
    });
    return nuevoArray;
}

console.log(gestionarArray(rarray(15 ,-10,20)))
console.log(gestionarArray(rarray(15 ,-10,20)))
console.log(gestionarArray(rarray(15 ,-10,20)))