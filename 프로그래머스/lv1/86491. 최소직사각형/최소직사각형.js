/**
 * 최소직사각형
 * 
 * @param {Array} sizes 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열
 * @returns 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기
 */
const solution = sizes => {
    let answer = 0;
    let width = 0;
    let height = 0;

    sizes.forEach(([w, h]) => {
        let tmpWidth = Math.max(w, h);
        let tmpHeight = Math.min(w, h);

        width = Math.max(width, tmpWidth);
        height = Math.max(height, tmpHeight);
    });

    answer = width * height;

    return answer;
}