/**
 * 없는 숫자 더하기
 * 
 * @param {Array} numbers 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열
 * @returns numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수
 */
const solution = numbers => {
    const MAX_NUMBER = 10;

    const sumOfMaxNum = Array.from([...Array.from({length: MAX_NUMBER}).keys()]).reduce((acc, cur) => acc + cur, 0);
    const sumOfnumbers = numbers.reduce((acc, cur) => acc + cur, 0);

    return sumOfMaxNum - sumOfnumbers;
}