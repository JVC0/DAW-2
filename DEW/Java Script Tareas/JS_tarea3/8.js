function rarray(nums = 10, min = 100, max = 200) {
    let array = [];
    let countOccurrences = {};
    
    for (let index = 0; index < nums; index++) {
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(random);
    }
    
    array.forEach(num => {
        countOccurrences[num] = (countOccurrences[num] || 0) + 1;
    });
    
    return countOccurrences;
}

console.log(rarray(50, 10, 20));
