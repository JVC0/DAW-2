function deg2rad(x) {
    return x * (Math.PI / 180); 
}

function rad2deg(x) {
    return x * (180 / Math.PI); 
}

function cosDeg(x) {
    return Math.cos(deg2rad(x)); 
}
function sinDegAlt(x) {
    return Math.sqrt(1 - Math.pow(cosDeg(x), 2))
}

function cosDegAlt(x) {
    return Math.sqrt(1 - Math.pow(sinDeg(x), 2))
}

console.log(deg2rad(180));
console.log(rad2deg(Math.PI));
console.log(cosDeg(60)); 
console.log(sinDegAlt(60));  
console.log(cosDegAlt(30)); 