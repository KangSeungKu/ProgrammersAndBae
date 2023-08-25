/**
 * 음양 더하기
 * 
 * @param {Array} absolutes 정수들의 절댓값을 차례대로 담은 정수 배열
 * @param {Array} signs 정수들의 부호를 차례대로 담은 불리언 배열
 * @returns 
 */
const solution = (absolutes, signs) => {
    let answer = 0;

    absolutes.forEach((n, i) => {
        answer += signs[i] ? n : -n;
    });

    return answer;
}