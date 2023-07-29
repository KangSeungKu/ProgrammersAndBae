const PIZZA_SLICES = 6;

const solution = (n) => {
    let answer = 1;

    while((PIZZA_SLICES * answer) % n) {
        answer++;
    }

    return answer;
}