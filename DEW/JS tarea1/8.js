function hdec2hms(x){
const hora =Math.floor(x)
const minutos = Math.floor((x - hora) *60)
const segundos = Math.round(((x - hora) * 60 - minutos) * 60);
return(hora+":"+minutos+":"+segundos)
}
console.log(hdec2hms(10.12))
console.log(hdec2hms(8.25))

function hdec2hms_inverse(h,m,s){
    const hora = h +(m/60)+(s/3600)
    return hora
}

console.log(hdec2hms_inverse(8,15,0))
console.log(hdec2hms_inverse(10,7,12))