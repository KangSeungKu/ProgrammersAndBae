const solution = numbers => {
    let res = numbers[0] * numbers[1];
    let num = numbers.pop();

    while(numbers.length) {
        numbers.forEach(n => res = Math.max(res, num * n));
        num = numbers.pop();
    }

    return res;
}