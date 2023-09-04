/**
 * 완주하지 못한 선수
 * 
 * @param {Array} participant 마라톤에 참여한 선수들의 이름이 담긴 배열
 * @param {Array} completion 완주한 선수들의 이름이 담긴 배열
 * @returns 완주하지 못한 선수의 이름
 */
const solution1 = (participant, completion) => {
    const participantMap = new Map();
    let answer = "";

    participant.forEach(name => participantMap.has(name) ? participantMap.set(name, participantMap.get(name) + 1) : participantMap.set(name, 1));
    completion.forEach(name => participantMap.set(name, participantMap.get(name) - 1));
    participantMap.forEach((value, key) => {
        if(value) answer = key;
    });

    return answer;
}

// '다른 사람의 풀이' 중 신박해 보이는 코드
// 보기가 너무 어려움 (가독성이 떨어짐)
const solution2 = (_,$) => _.find(_ => !$[_]--, $.map(_ => $[_] = ($[_] | 0) + 1))