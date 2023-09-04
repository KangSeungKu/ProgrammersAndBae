/**
 * 완주하지 못한 선수
 * 
 * @param {Array} participant 마라톤에 참여한 선수들의 이름이 담긴 배열
 * @param {Array} completion 완주한 선수들의 이름이 담긴 배열
 * @returns 완주하지 못한 선수의 이름
 */
const solution = (participant, completion) => {
    const participantMap = new Map();
    let answer = "";

    participant.forEach(name => participantMap.has(name) ? participantMap.set(name, participantMap.get(name) + 1) : participantMap.set(name, 1));
    completion.forEach(name => participantMap.set(name, participantMap.get(name) - 1));
    participantMap.forEach((value, key) => {
        if(value) answer = key;
    });

    return answer;
}