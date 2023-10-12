/**
 * 2016년
 * 
 * @param {Number} a 월
 * @param {Number} b 일
 * @returns 무슨 요일인지 리턴
 */
const solution = (a, b) => new Date(2016, a-1, b).toString().slice(0,3).toUpperCase();