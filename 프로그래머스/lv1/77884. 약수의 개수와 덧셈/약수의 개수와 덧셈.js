/**
 * 약수의 개수와 덧셈
 * 
 * @param {Number} left 정수
 * @param {Number} right 정수
 * @returns 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수
 */
const solution = (left, right) => {
    let answer = 0;

    for(let i = left; i <= right; i++) {
        answer += !(getDivisor(i) % 2) ? i : (-i)
    }

    return answer;
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