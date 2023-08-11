const solution = (number, limit, power) => {
    let res = 0;

    for(let i = 1; i <= number; i++) {
        let divisor = getDivisor(i);
        
        if(divisor > limit) divisor = power;

        res += divisor;
    }

    return res;
}

const getDivisor = n => {
    const sqrtNum = Math.sqrt(n);
    let res = 0;

    for(let i = 1; i <= sqrtNum; i++) {
        if(i === sqrtNum) res++;
        else if(!(n % i)) res += 2;
        else 0;
    }

    return res;
}