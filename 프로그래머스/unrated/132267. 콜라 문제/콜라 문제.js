/**
 * 콜라 문제
 * 
 * @param {Number} a 마트에 주어야 하는 병 수
 * @param {Number} b a개를 가져다 주면 마트가 주는 콜라 병 수
 * @param {Number} n 가지고 있는 빈 병의 개수
 * @returns 받을 수 있는 콜라의 병 수
 */
const solution1 = (a, b, n) => {
    let answer = 0;

    while(n >= a) {
        let coke = ~~(n / a) * b;

        n = coke + n % a;
        answer += coke;
    }
    
    return answer;
}

// '다른 사람의 풀이' 추가
const solution2 = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b;