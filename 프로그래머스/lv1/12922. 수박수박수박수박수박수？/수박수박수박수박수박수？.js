/**
 * 수박수박수박수박수박수?
 * 
 * @param {Number} n 문자열 길이
 * @returns 같은 패턴을 유지하는 문자열
 */
const solution = n => {
    let answer = "";

    for(let i = 0; i < n; i++) {
        answer += i % 2 ? "박" : "수";
    }

    return answer;
}