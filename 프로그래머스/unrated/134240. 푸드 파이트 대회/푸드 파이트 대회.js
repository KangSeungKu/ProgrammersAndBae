/**
 * 푸드 파이트 대회
 * 
 * @param {Array} food 칼로리가 적은 순서대로 나타내는 정수 배열
 * @returns {String} 대회를 위한 음식의 배치를 나타내는 문자열
 */
const solution = food => {
    let answer = "0";

    // 수웅이가 준비한 물의 양이며, 항상 1
    food.shift();
    food.reverse();
    // 음식 분배
    food.forEach((n, i, s) => {
        const foodStr = String(s.length - i).repeat(n/2);

        answer = `${foodStr}${answer}${foodStr}`;
    });

    return answer;
}