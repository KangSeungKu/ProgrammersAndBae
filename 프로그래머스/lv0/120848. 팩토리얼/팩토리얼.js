const solution = n => {
    let answer = 1;
    let ftrl = 1;

    while(ftrl <= n) {
        answer++;
        ftrl *= answer;
    }

    return --answer;
}