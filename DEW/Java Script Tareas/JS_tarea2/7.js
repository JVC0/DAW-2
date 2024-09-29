function Point(a) {
    const lowercasetext = a.toLowerCase().trim();
    let points =0
    if (lowercasetext.startsWith('el') || lowercasetext.startsWith('la')) {
        points += 1;
    }
    if (lowercasetext.endsWith('ando') || lowercasetext.endsWith('endo')) {
        points += 10;
    }
    if (/\b\w+\b\scon\s\b\w+\b/.test(a)) {
        points += 100;
    }
    return points;
}

console.log(Point("La casa está pintando con cuidado  "))