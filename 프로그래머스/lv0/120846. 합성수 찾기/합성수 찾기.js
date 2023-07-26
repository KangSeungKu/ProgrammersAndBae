const solution = n => [...new Array(n+1).keys()].map(n => getFactors(n)).filter(n => n > 1).length;

const getFactors = n => {
    const res = [];
    const sqrtNum = ~~Math.sqrt(n);
    let idx = 0;

    for(let i = 2; i <= sqrtNum; i++) {
        while(!(n % i)) {
            res[idx++] = i;
            n /= i;
        }
    }

    if(n >= 2) res[idx] = n;

    return res.length;
}