/**
 * 예산
 * 
 * @param {Array} d 부서별로 신청한 금액이 들어있는 배열
 * @param {Number} budget 예산
 * @returns 
 */
const solution = (d, budget) => {
    const sortedD = d.slice().sort((a, b) => a - b);
    let answer = 0;
    let temp = 0;

    sortedD.some(n => {
        temp += n;
        answer++;

        if(temp >= budget) {
            if(temp !== budget) answer--;
            return true;
        }
    });

    return answer;
}