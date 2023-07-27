const solution = n => {
    const sqrtNum = ~~Math.sqrt(n);
    let cnt = 0;

    for(let i = 1; i <= sqrtNum; i++) {
        cnt += !(n % i) ? 1 : 0; 
    }

    return cnt += Math.sqrt(n) === sqrtNum ? (cnt - 1) : cnt;
}