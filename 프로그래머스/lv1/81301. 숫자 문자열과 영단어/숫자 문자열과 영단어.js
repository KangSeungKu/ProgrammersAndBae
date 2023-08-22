const convNumObj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
}

/**
 * 숫자 문자열과 영단어
 * 
 * @param {String} s 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열
 * @returns 원래 숫자
 */
const solution = s => {
    let answer = "";
    let tmpStr = "";

    [...s].forEach(ch => {
        if(isNaN(ch)) {
            tmpStr += ch;
        } else {
            answer += ch;
        }

        if(!isNaN(convNumObj[tmpStr])) {
            answer += convNumObj[tmpStr];
            tmpStr = "";
        }
    });

    return +answer;
}