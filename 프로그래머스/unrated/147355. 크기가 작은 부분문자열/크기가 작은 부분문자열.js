const solution = (t, p) => {
    const tArr = [...t];
    const splicedT = [];

    while(tArr.length >= p.length) {
        splicedT.push(Number(tArr.slice(0, p.length).join("")));
        tArr.shift();
    }

    return splicedT.reduce((acc, cur) => acc += cur <= Number(p) ? 1 : 0, 0);
}