/**
 * 실패율
 * 
 * @param {Number} N 전체 스테이지의 개수
 * @param {Array} stages 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열
 * @returns 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열
 */
const solution = (N, stages) => {
    let denominator = stages.length;
    let tmpArr = new Array(N).fill(0);
    const answer = [];

    stages.forEach(n => {
        if(n <= N) {
            tmpArr[n-1]++;
        }
    });

    tmpArr.forEach((n, i) => {
        let res = n / denominator
        denominator -= n;
        answer.push({idx: i+1, rate: res});
    });

    return answer.sort((a, b) => {
        return b.rate - a.rate;
    }).map(obj => obj.idx);
}