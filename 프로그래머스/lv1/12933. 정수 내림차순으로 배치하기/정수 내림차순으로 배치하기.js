/**
 * 정수 내림차순으로 배치하기
 * 
 * @param {Number} n 정수
 * @returns 큰것부터 작은 순으로 정렬한 새로운 정수
 */
const solution = n => Number([...String(n)].sort((a, b) => b - a).join(""));