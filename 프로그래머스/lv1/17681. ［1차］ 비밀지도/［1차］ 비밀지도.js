/**
 * [1차] 비밀지도
 * 
 * @param {Number} n 지도의 한 변 크기
 * @param {Array} arr1 정수 배열
 * @param {Array} arr2 정수 배열
 * @returns 
 */
const solution = (n, arr1, arr2) => arr1.map((num, idx) => (num | arr2[idx]).toString(2).padStart(n, "0").replaceAll("1", "#").replaceAll("0", " "));