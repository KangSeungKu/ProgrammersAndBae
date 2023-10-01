/**
 * 문자열 다루기 기본
 * 
 * @param {String} s 문자열
 * @returns {Boolean} 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인
 */
const solution = s => {
    let answer = false;

    if(s.length === 4 || s.length === 6) {
        answer = ![...s].some(ch => isNaN(ch));
    }
    
    return answer;
}