/**
 * 행렬의 덧셈
 * 
 * @param {Array} arr1 행렬
 * @param {Array} arr2 행렬
 * @returns 행렬 덧셈의 결과
 */
const solution = (arr1, arr2) => arr1.map((arr, i) => arr.map((n, j) => n + arr2[i][j]));