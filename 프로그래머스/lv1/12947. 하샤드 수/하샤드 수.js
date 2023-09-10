/**
 * 하샤드 수
 * 
 * @param {Number} x 정수
 * @returns 하샤드 수인지 아닌지 검사결과
 */
const solution = x => !(x % [...String(x)].reduce((acc, cur) => acc + Number(cur), 0));