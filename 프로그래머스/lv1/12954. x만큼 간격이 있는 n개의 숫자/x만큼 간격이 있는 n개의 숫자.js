/**
 * x만큼 간격이 있는 n개의 숫자
 * 
 * @param {Number} x 정수
 * @param {Number} n 자연수
 * @returns x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트
 */
const solution = (x, n) => [...new Array(n).keys()].map(n => (n + 1) * x);