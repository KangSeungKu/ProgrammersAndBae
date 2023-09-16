/**
 * 콜라츠 추측
 * 
 * @param {Number} num 정수
 * @returns 반복 횟수
 */
const solution = num => {
    const LIMIT = 500;
    let tmpNum = num;
    let answer = 0;

    // 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
    while(tmpNum !== 1 && answer < LIMIT) {
        // 1-1. 입력된 수가 짝수라면 2로 나눕니다.
        if(tmpNum % 2) {    
            tmpNum = tmpNum * 3 + 1;
        // 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
        } else {    
            tmpNum /= 2;
        }
        answer++;
    }

    return answer !== LIMIT ? answer : -1;
}