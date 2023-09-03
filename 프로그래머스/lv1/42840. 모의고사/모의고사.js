/**
 * 모의고사
 * 
 * @param {Array} answers 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열
 * @returns 가장 많은 문제를 맞힌 사람이 누구인지 배열
 */
const solution = answers => {
    let answer = [];
    let maxNum = 0;

    const gaveUps = [
        {
            id: 1,
            mathSol: [1, 2, 3, 4, 5]
        },
        {
            id: 2,
            mathSol: [2, 1, 2, 3, 2, 4, 2, 5]
        },
        {
            id: 3,
            mathSol: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
        },
    ];

    answer = gaveUps.map(gaveUp => {
        let cnt = answers.filter((ans, idx) => ans === gaveUp.mathSol[idx % gaveUp.mathSol.length]).length;
        maxNum = Math.max(maxNum, cnt);

        return {
            ...gaveUp,
            cnt: cnt,
        };
    });
    
    return answer.filter(gaveUp => gaveUp.cnt === maxNum).map(gaveUp => gaveUp.id);
}