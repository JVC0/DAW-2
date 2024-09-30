function rarray(nums = 10, min = 100, max = 200) {
    let array = [];
    for (let index = 0; index < nums; index++) {
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(random);
    }
    return array;
}
function maxmin(a){
    const maxValue = Math.max(a);
    const maxIndex = a.indexOf(maxValue);
    const minValue = Math.min(a);
    const minIndex = a.indexOf(minValue);
    return`max:${maxValue} maxindex${maxIndex} min${minValue} minindex${minIndex}`;
}
console.log(maxmin(rarray(20,-100,100)))
console.log(maxmin(rarray(20,-100,100)))