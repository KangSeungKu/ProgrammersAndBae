/**
 * 약수의 합
 * 
 * @param {Number} n 정수
 * @returns n의 약수를 모두 더한 값
 */
const solution = n => {
    const sqrtNum = Math.sqrt(n);
    let answer = 0;

    for(let i = 1; i <= sqrtNum; i++) {
        if(!(n % i)) {
            answer += (i === sqrtNum ? 0 : (n / i)) + i;
        }
    }

    return answer;
}