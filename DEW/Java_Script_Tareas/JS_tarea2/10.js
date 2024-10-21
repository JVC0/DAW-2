function palindromo(text) {
        let fraseLimpia = text.toLowerCase().replace(/\s+/g, '');
        let fraseReversa = fraseLimpia.split('').reverse().join('');
        if (fraseLimpia === fraseReversa){
            return "es un palindromo"
        }else{
            return "no es un palindromo"
        }
    
}
console.log(palindromo("Roma ni se conoce sin oro ni se conoce sin amor"));
    console.log(palindromo("Anita lava la tina")); 
    console.log(palindromo("Esto no es un palíndromo"));