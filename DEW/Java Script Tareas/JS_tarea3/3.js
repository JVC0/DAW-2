function orderarray(a) {
    return a.sort((a, b) => a - b);
}

function rarray(nums = 10, min = 100, max = 200) {
    let array = [];
    for (let index = 0; index < nums; index++) {
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(random);
    }
    return orderarray(array);
}

function shuffle(array) {
    let currentIndex = array.length;
  
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

console.log(shuffle(rarray(20, 20, 100)));
console.log(rarray(20, 20, 100));
console.log(rarray());
