/**
 * 두 정수 사이의 합
 * 
 * @param {Number} a 정수
 * @param {Number} b 정수
 * @returns 사이에 속한 모든 정수의 합
 */
const solution = (a, b) => (Math.abs(a - b) + 1) * (a + b) / 2;