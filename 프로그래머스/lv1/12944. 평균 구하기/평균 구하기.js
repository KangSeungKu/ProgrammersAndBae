/**
 * 평균구하기
 * 
 * @param {Array} arr 정수를 담고 있는 배열
 * @returns 평균값
 */
const solution = arr => arr.reduce((arr, cur) => arr + cur, 0) / arr.length;