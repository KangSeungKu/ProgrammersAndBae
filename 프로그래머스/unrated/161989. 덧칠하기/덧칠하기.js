const solution = (n, m, section) => {
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