function JulianaDate(dateArg) {
    const JULIANA = 2440587.5;
    const date = new Date(dateArg);
    const unixDate = date.getTime() / 86400000; 
    return unixDate + JULIANA;
}

console.log(JulianaDate("2018-09-20"));
