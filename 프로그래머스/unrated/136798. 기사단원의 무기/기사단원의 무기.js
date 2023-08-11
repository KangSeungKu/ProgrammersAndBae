const solution = (number, limit, power) => Array.from({length: number}, (_, i) => i + 1).map(n => getDivisor(n)).map(n => n > limit ? power : n).reduce((acc, cur) => acc + cur);

const getDivisor = n => {
    let res = 0;

    for(let i = 1; i * i <= n; i++) {
        if(i * i === n) res++;
        else if(!(n % i)) res += 2;
        else 0;
    }

    return res;
}