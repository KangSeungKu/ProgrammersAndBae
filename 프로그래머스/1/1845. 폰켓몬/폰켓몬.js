/**
 * 폰켓몬
 * 
 * @param {Array} nums N마리 폰켓몬의 종류 번호가 담긴 배열
 * @returns N/2마리의 폰켓몬을 선택하는 방법 중, 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아, 그때의 폰켓몬 종류 번호의 개수
 */
const solution = nums => new Set(nums).size > nums.length / 2 ? nums.length / 2 : new Set(nums).size;