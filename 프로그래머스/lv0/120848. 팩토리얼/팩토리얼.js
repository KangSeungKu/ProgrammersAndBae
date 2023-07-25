const solution = n => {
    let answer = 0;

    while(getPactorial(answer) <= n) answer++;

    return --answer;
}

const getPactorial = n => n > 1 ? n * getPactorial(--n) : 1;