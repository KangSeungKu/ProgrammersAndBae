/**
 * 3진법 뒤집기
 * 
 * @param {Number} n 자연수
 * @returns 10진법으로 표현한 수
 */
const solution = n => parseInt([...n.toString(3)].reverse().join(''), 3);