const solution = angle => {
    let res = 0;

    if(angle === 180) {
        res = 4;
    } else if(angle > 90) {
        res = 3;
    } else if(angle === 90) {
        res = 2;
    } else {
        res = 1;
    }

    return res;
}