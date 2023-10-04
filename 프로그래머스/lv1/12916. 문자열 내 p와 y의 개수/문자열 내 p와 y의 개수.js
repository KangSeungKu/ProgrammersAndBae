/**
 * 문자열 내 p와 y의 개수
 * 
 * @param {String} s 문자열
 * @returns 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False
 */
const solution = s => {
    let pNum = 0;
    let yNum = 0;
    [...s.toLowerCase()].forEach(ch => {
        if(ch === "p") {
            pNum++;
        } else if(ch === "y") {
            yNum++;
        } else {}
    });

    return pNum === yNum;
}