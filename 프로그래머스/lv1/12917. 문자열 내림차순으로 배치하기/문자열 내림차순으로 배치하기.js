/**
 * 문자열 내림차순으로 배치하기
 * 
 * @param {String} s 영문 대소문자로만 구성된 문자열
 * @returns 큰것부터 작은 순으로 정렬
 */
const solution = s => [...s].map(ch => ch.charCodeAt()).sort((a, b) => b - a).map(ch => String.fromCharCode(ch)).join("");