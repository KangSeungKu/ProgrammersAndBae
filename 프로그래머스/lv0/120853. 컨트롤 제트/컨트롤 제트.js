const solution = s => {
    const arr = s.split(" ");
    const res = [];

    arr.forEach(n => {
        if(isNaN(n)) {
            res.pop();
        } else {
            res.push(n);
        }
    });

    return res.reduce((acc, cur) => acc + Number(cur), 0);
}