/**
 * 같은 숫자는 싫어
 * 
 * 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지
 * @param {Array} arr 숫자 0부터 9까지로 이루어진 배열 (1,000,000 이하의 자연수)
 * @returns 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거한 배열
 */
const solution1 = arr => {
    const answer = [];
    let lastNum = NaN;

    arr.forEach(n => {
        if(lastNum !== n) {
            answer.push(n);
            lastNum = n;
        }
    });

    return answer;
}

const solution2 = arr => arr.filter((val, idx) => val != arr[idx+1]);