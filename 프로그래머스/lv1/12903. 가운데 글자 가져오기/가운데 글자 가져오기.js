/**
 * 가운데 글자 가져오기
 * 
 * @param {String} s 길이가 1 이상, 100이하인 문자열
 * @returns 단어 s의 가운데 글자를 반환(단어의 길이가 짝수라면 가운데 두글자를 반환)
 */
const solution = s => s.length % 2 ? s.charAt(s.length / 2) : s.substring(s.length / 2 - 1, s.length / 2 + 1);