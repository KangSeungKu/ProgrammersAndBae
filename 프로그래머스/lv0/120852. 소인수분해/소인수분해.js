const solution = n => {
    const res = [];
    let idx = 0;

    for(let i = 2; i <= n; i++) {
        while (!(n % i)) {
            n /= i;
            res[idx++] = i;
        }
    }

    return [...new Set(res)];
}