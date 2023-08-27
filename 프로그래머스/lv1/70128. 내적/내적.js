/**
 * 내적
 * 
 * @param {Array} a 정수 배열
 * @param {Array} b 정수 배열
 * @returns a와 b의 내적
 */
const solution1 = (a, b) => {
    let answer = 0;

    for(let i = 0; i < a.length; i++) {
        answer += a[i] * b[i];
    }

    return answer;
}

// 한 줄 코드
const solution2 = (a, b) => a.reduce((acc, cur, idx) => acc + cur * b[idx], 0);