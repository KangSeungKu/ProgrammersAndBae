/**
 * 삼총사
 * 
 * 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 '삼총사'라고 함.
 * @param {Array} number 학생들의 번호를 나타내는 정수 배열
 * @returns 삼총사를 만들 수 있는 방법의 수
 */
const solution = number => {
    let answer = 0;

    for(let n1 = 0; n1 < number.length; n1++) {
        for(let n2 = n1 + 1; n2 < number.length; n2++) {
            for(let n3 = n2 + 1; n3 < number.length; n3++) {
                if(!(number[n1] + number[n2] + number[n3])) answer++;
            }
        }
    }

    return answer;
}