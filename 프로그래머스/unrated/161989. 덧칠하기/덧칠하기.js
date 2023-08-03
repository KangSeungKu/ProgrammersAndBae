const solution1 = (n, m, section) => {
    let drawn = 0;
    let basis = section[0];

    section.forEach(sect => {
        if(!(basis <= sect && sect < (basis + m))) {
            drawn++;
            basis = sect;
        }
    });

    return ++drawn;
}

const solution2 = (n, m, section) => {
    let tmpSection = section.slice();
    let drawn = 0;

    while(tmpSection.length) {
        let draw = tmpSection.at(0);
        drawn++;

        while(tmpSection.at(0) < (draw + m)) {
            tmpSection.shift();
        }
    }

    return drawn;
}