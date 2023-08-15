/**
 * 숫자 짝꿍
 * 
 * @param {String} X 정수
 * @param {String} Y 정수
 * @returns {String} 공통으로 나타난 수들의 조합으로 가장 큰 정수
 */
const solution = (X, Y) => {
    const strArr = [];
    const tmpObj = {};
    const xArr = [...X].sort((a, b) => b - a);
    let answer = "";
    
    [...Y].forEach(strNum => {
        tmpObj[strNum] = tmpObj[strNum] ? tmpObj[strNum] + 1 : 1;
    });

    xArr.forEach(strNum => {
        if(tmpObj[strNum]) {
            strArr.push(strNum)
            tmpObj[strNum]--;
        }
    })

    if(!strArr.length) {
        answer = "-1";
    } else if(strArr[0] === "0") {
        answer = "0";
    } else {
        answer = strArr.join("");
    }

    return answer;
}