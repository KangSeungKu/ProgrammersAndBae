const solution = (numbers, k) => {
    let flag = 0;

    while(flag < k - 1) {
        numbers = [...numbers.slice(2), ...numbers.slice(0, 2) ];
        flag++;
    }

    return numbers[0];
}