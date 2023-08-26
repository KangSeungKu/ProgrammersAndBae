/**
 * 신규 아이디 추천
 * 
 * @param {String} new_id 신규 유저가 입력한 아이디
 * @returns 프로그램이 추천하는 새로운 아이디
 */
const solution = new_id => {
    const LEVEL5_CHAR = "a";
    const LEVEL6_LENGTH = 15;
    const LEVEL7_LENGTH = 3;

    let answer = new_id;
    
    // 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
    answer = answer.toLowerCase();

    // 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
    answer = answer.replace(/[^a-z0-9-_.]/g, "");

    // // 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
    answer = answer.replace(/[.]{2,}/g,".");

    // // // 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
    answer = answer.replace(/^[.]|[.]$/g, "");

    // // // 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
    if(!answer) answer = LEVEL5_CHAR;

    // // // 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
    // // // 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
    if(answer.length > LEVEL6_LENGTH) answer = answer.substring(0, LEVEL6_LENGTH).replace(/[.]$/g, "");

    // // // 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
    if(answer.length < LEVEL7_LENGTH) answer += answer.charAt(answer.length - 1).repeat(LEVEL7_LENGTH - answer.length);

    return answer;
}