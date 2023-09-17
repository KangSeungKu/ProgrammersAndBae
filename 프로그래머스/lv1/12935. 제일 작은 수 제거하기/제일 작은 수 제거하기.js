/**
 * 제일 작은 수 제거하기
 * 
 * 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴
 * @param {Array} arr 정수를 저장한 배열
 * @returns arr 에서 가장 작은 수를 제거한 배열을 리턴
 */
const solution = arr => {
    const answer = [];
    
    if(arr.length > 1) {
        const minNum = Math.min(...arr);
        
        arr.forEach(n => {
            if(n !== minNum) {
                answer.push(n);
            }
        });
    } else {
        answer.push(-1);
    }

    return answer;
}