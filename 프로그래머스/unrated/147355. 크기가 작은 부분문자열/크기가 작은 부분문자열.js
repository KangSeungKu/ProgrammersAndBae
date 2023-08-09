const solution = (t, p) => {
    const tArr = [...t];
    const compareNum = Number(p);
    let cnt = 0;

    while(tArr.length >= p.length) {
        cnt += Number(tArr.slice(0, p.length).join("")) <= compareNum ? 1 : 0;
        tArr.shift();
    }

    return cnt;
}