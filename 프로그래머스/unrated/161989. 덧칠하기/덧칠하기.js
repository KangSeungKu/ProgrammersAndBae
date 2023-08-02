const solution = (n, m, section) => {
    let drawn = 0;
    let basis = section[0]

    section.forEach(sect => {
        if(!(basis <= sect && sect < (basis + m))) {
            drawn++;
            basis = sect;
        }
    });

    return ++drawn;
}