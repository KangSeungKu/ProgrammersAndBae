/**
 * 문자열 내 마음대로 정렬하기
 * 
 * @param {Array} strings 문자열로 구성된 리스트
 * @param {Number} n 정수
 * @returns 
 */
const solution = (strings, n) => strings.sort((str1, str2) => str1.charAt(n).charCodeAt() - str2.charAt(n).charCodeAt() || str1.localeCompare(str2));