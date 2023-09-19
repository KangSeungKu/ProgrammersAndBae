/**
 * 이상한 문자 만들기
 * 
 * @param {String} s 문자열
 * @returns 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴
 */
const solution = s => s.split(" ").map(str => [...str].map((ch, idx) => idx % 2 ? ch.toLowerCase() : ch.toUpperCase()).join("")).join(" ");