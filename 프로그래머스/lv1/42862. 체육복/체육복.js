/**
 * 체육복
 * 
 * @param {Number} n 전체 학생의 수
 * @param {Array} lost 체육복을 도난당한 학생들의 번호가 담긴 배열
 * @param {Array} reserve 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열
 * @returns 체육수업을 들을 수 있는 학생의 최댓값
 */
const solution = (n, lost, reserve) => {
    const tmpLostArr = lost.slice().sort((a, b) => a - b).filter(n => !reserve.includes(n));
    const tmpReserveArr = reserve.slice().sort((a, b) => a - b).filter(n => !lost.includes(n));
    let successReserve = lost.length - tmpLostArr.length;

    tmpLostArr.forEach(lostNum => {
        tmpReserveArr.some((reserveNum, idx) => {
            if(lostNum - 1 <= reserveNum && reserveNum <= lostNum + 1) {
                successReserve++;
                delete tmpReserveArr[idx];
                return true;
            }
        });
    });

    return n - lost.length + successReserve;
}