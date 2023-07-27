// 처음 풀었을 때, 방식
const solution1 = (numbers, k) => {
    let flag = 0;

    while(flag < k - 1) {
        numbers = [...numbers.slice(2), ...numbers.slice(0, 2) ];
        flag++;
    }

    return numbers[0];
}

// 연산을 통한 결과
const solution2 = (numbers, k) => numbers[((k - 1) * 2) % numbers.length];