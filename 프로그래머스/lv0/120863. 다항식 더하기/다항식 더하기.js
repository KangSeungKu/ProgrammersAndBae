// 기존방식
const solution1 = polynomial => {
    const polyn = polynomial.replaceAll(" + ", " ").split(" ");
    let res = "";
    let x = 0;
    let con = 0;

    polyn.forEach(n => {
        if(n.includes("x")) {
            x += n.length === 1 ? 1 : Number(n.replace("x", ""));
        } else {
            con += Number(n);
        }
    });

    res = x === 1 ? "x" : x > 1 ? x + "x" : "";
    res += con === 0 ? "" : x > 0 ? " + " + con : con;

    return res;
}

// '다른 사람의 풀이'를 참고한 코드
const solution2 = polynomial => {
    const polyn = polynomial.split(" + ");
    let res = [];
    let x = 0;
    let con = 0;

    polyn.forEach(n => {
        if(isNaN(n)) {
            x += Number(n.replace('x', '')) || 1;
        } else {
            con += Number(n);
        }
    });

    if(x) res.push(`${x === 1 ? '' : x}x`);
    if(con) res.push(con);

    return res.join(" + ");
}