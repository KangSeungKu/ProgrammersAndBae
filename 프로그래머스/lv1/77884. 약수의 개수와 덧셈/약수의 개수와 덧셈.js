/**
 * 약수의 개수와 덧셈
 * 
 * @param {Number} left 정수
 * @param {Number} right 정수
 * @returns 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수
 */
const solution1 = (left, right) => {
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

// '다른 사람의 풀이'를 참고하여 작성
// 제곱근이 정수면 약수는 홀수개인 것을 활용
const solution2 = (left, right) => {
    let answer = 0;

    for (let i = left; i <= right; i++) {
        answer += Number.isInteger(Math.sqrt(i)) ? (-i) : i;
    }

    return answer;
}