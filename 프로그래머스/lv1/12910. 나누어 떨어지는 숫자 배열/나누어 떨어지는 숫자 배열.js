/**
 * 나누어 떨어지는 숫자 배열
 * 
 * divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환
 * @param {Array} arr 자연수를 담은 배열 (1 이상인 배열)
 * @param {Number} divisor 자연수
 * @returns array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환
 */
const solution = (arr, divisor) => {
    const answer = arr.filter(n => !(n % divisor)).sort((a, b) => a - b);
    
    return answer.length ? answer : [-1];
}