/**
 * [1차] 다트 게임
 * 
 * @param {String} dartResult 입력 문자열
 * @returns 총점수
 */
const solution = dartResult => {
    const OP_OBJ = {
        S: n => +n,
        D: n => n**2,
        T: n => n**3,
    }
    const op = dartResult.split(/\d/g).filter(n => n);
    const scores = dartResult.split(/\D/g).filter(n => n);
    let answer = [];
    let bonusArr = [];

    scores.forEach((score, idx) => {
        answer.push(OP_OBJ[op[idx].at(0)](score));
        let bonus = op[idx].at(1);

        if(bonus) {
            if(bonus === "*") {
                bonusArr.push(2);
            } else {
                bonusArr.push(-1);
            }

            if(bonus === "*" && idx !== 0) {
                bonusArr[idx - 1] *= 2;
            }
        } else {
            bonusArr.push(1);
        }
    });

    return answer.reduce((acc, cur, idx) => acc + cur * bonusArr[idx], 0);
}