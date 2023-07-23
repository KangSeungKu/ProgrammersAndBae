const solution1 = numbers => {
    let res = numbers[0] * numbers[1];
    let num = numbers.pop();

    while(numbers.length) {
        numbers.forEach(n => res = Math.max(res, num * n));
        num = numbers.pop();
    }

    return res;
}

// '다른 사람의 풀이' 중 괜찮다고 생각되는 코드
// 정렬을 이용하여 음수를 고려한 양끝의 곱 중 큰 값을 비교하는 방식
const solution2 = numbers => {
    numbers.sort((a,b) => a - b);
    return Math.max(numbers[0] * numbers[1], numbers[numbers.length - 1] * numbers[numbers.length - 2]);
}