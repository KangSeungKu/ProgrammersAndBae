/**
 * 자릿수 더하기
 * 
 * @param {Number} n 정수
 * @returns N의 각 자릿수의 합
 */
const solution = n => [...String(n)].reduce((acc, cur) => acc + Number(cur), 0);