const solution = (s) => {
    const answer = [];
    const strMap = new Map();

    [...s].forEach((ch, idx) => {
        strMap.has(ch) ? answer.push(idx - strMap.get(ch)) : answer.push(-1);
        strMap.set(ch, idx);
    });

    return answer;
}