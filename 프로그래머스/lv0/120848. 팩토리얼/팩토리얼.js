// 기존에 풀었던 방식
const solution1 = n => {
    let answer = 0;

    while(getPactorial(answer) <= n) answer++;

    return --answer;
}

const getPactorial = n => n > 1 ? n * getPactorial(--n) : 1;

// '다른 사람의 풀이' 중 괜찮다고 생각되는 코드
const solution = n => {
    let answer = 1;
    let ftrl = 1;

    while(ftrl <= n) {
        answer++;
        ftrl *= answer;
    }

    return --answer;
}