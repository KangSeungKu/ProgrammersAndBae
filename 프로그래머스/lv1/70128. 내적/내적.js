/**
 * 내적
 * 
 * @param {Array} a 정수 배열
 * @param {Array} b 정수 배열
 * @returns a와 b의 내적
 */
const solution = (a, b) => {
    let answer = 0;

    for(let i = 0; i < a.length; i++) {
        answer += a[i] * b[i];
    }

    return answer;
}