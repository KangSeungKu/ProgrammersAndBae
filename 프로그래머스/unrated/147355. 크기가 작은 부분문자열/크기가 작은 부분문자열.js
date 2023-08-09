// 기존코드
const solution1 = (t, p) => {
    const tArr = [...t];
    const splicedT = [];

    while(tArr.length >= p.length) {
        splicedT.push(Number(tArr.slice(0, p.length).join("")));
        tArr.shift();
    }

    return splicedT.reduce((acc, cur) => acc += cur <= Number(p) ? 1 : 0, 0);
}

// reduce를 사용하지 않고 한 번의 반복으로 처리할 수 있도록 개선
const solution2 = (t, p) => {
    const tArr = [...t];
    const compareNum = Number(p);
    let cnt = 0;

    while(tArr.length >= p.length) {
        cnt += Number(tArr.slice(0, p.length).join("")) <= compareNum ? 1 : 0;
        tArr.shift();
    }

    return cnt;
}