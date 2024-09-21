function validate(a, b, c){ 

if (a < 0 || b < 0 || c < 0)
    return "Error"
}

if (a == 0 && b == 0 && c == 0){
    return "Error"
}

if((a+b+c) > 10 && (a !== b && b !== c && a !== c )){
    return "Error"
}

console.log(validate(3, -1, 5));
console.log(validate(0, 0, 0));   
console.log(validate(4, 3, 5));  
console.log(validate(1, 2, 3));