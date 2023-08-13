/**
 * 두 개 뽑아서 더하기
 * 
 * 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수
 * @param {Array} numbers 정수 배열
 * @returns 더해서 만들 수 있는 모든 수(오름차순)
 */
const solution = numbers => {
    const answer = [];

    for(let n1 = 0; n1 < numbers.length; n1++) {
        for(let n2 = n1 + 1; n2 < numbers.length; n2++) {
            answer.push(numbers[n1] + numbers[n2]);
        }
    }

    return [...new Set(answer)].sort((a, b) => a - b);
}