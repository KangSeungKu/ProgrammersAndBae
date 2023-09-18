/**
 * 자연수 뒤집어 배열로 만들기
 * 
 * @param {Number} n 정수
 * @returns 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴
 */
const solution = n => [...String(n)].reverse().map(a => +a);