/**
 * 핸드폰 번호 가리기
 * 
 * @param {String} phone_number 전화번호
 * @returns 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 '*'으로 가린 문자열
 */
const solution = phone_number => phone_number.replace(/\d(?=\d{4})/g, "*");