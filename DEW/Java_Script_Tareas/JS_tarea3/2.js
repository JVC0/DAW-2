function rarray(nums = 10, min = 100, max = 200) {
    let array = [];
    for (let index = 0; index < nums; index++) {
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(random);
    }
    return array;
}



function orderarray(a){
    return a.sort((a, b) => a - b);
}


  
console.log(orderarray(rarray(20,20,100)));
console.log(rarray(20,20,100));
console.log(rarray());
