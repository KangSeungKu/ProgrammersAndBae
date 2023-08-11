// 초기방법
const solution1 = (number, limit, power) => Array.from({length: number}, (_, i) => i + 1).map(n => getDivisor(n)).map(n => n > limit ? power : n).reduce((acc, cur) => acc + cur);

// 일반적으로 검색하면 나오는 방식
const getDivisor = n => {
    let res = 0;

    for(let i = 1; i * i <= n; i++) {
        if(i * i === n) res++;
        else if(!(n % i)) res += 2;
        else 0;
    }

    return res;
}

// 가독성과 처리율을 줄이기 위해
// 일반 for문으로 수정
const solution2 = (number, limit, power) => {
    let res = 0;

    for(let i = 1; i <= number; i++) {
        let divisor = getDivisor2(i);
        
        if(divisor > limit) divisor = power;

        res += divisor;
    }

    return res;
}

// 제곱근을 이용한 방식
const getDivisor2 = n => {
    const sqrtNum = Math.sqrt(n);
    let res = 0;

    for(let i = 1; i <= sqrtNum; i++) {
        if(i === sqrtNum) res++;
        else if(!(n % i)) res += 2;
        else 0;
    }

    return res;
}