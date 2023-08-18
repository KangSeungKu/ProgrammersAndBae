/**
 * 나머지가 1이 되는 수 찾기
 * 
 * @param {Number} n 자연수
 * @returns 나머지가 1이 되도록 하는 가장 작은 자연수
 */
const solution = n => {
    let answer = 1;

    while(n % answer !== 1) {
        answer++;
    }

    return answer;
}