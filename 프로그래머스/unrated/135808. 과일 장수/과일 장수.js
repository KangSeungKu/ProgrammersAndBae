/**
 * 과일 장수가 얻을 수 있는 최대 이익을 return하는 solution 함수
 * @param {Number} k 사과의 최대 점수  
 * @param {Number} m 한 상자에 들어가는 사과의 수
 * @param {Array} score 사과들의 점수
 * @returns 
 */
const solution = (k, m, score) => {
    // 사용할 수 있는 상자의 수
    const box = ~~(score.length / m);
    let answer = 0;
    
    // 정렬
    score.sort((a, b) => b - a);

    // (최저 사과 점수) x (한 상자에 담긴 사과 개수)
    for(let i = 0; i < box; i++) {
        answer += score[(i+1) * m - 1] * m;
    }

    return answer;
}