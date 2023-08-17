/**
 * 성격 유형 검사하기
 * 
 * @param {Array} survey 질문마다 판단하는 지표를 담은 1차원 문자열 배열
 * @param {Array} choices 각 질문마다 선택한 선택지를 담은 1차원 정수 배열
 * @returns 검사자의 성격 유형 검사 결과를 지표 번호
 */
const solution = (survey, choices) => {
    // 기준값
    const REFERENCE_VALUE = 4;

    // mbti유형 인덱스
    const mbtiIdxObj = {
        R: 0,
        T: 0,
        C: 1,
        F: 1,
        J: 2,
        M: 2,
        A: 3,
        N: 3,
    };
    // mbti검사치 누적용 배열
    const mbtiArr = [
        [
            {
                type: "R",
                score: 0,
            },
            {
                type: "T",
                score: 0,
            },
        ],
        [
            {
                type: "C",
                score: 0,
            },
            {
                type: "F",
                score: 0,
            },
        ],
        [
            {
                type: "J",
                score: 0,
            },
            {
                type: "M",
                score: 0,
            },
        ],
        [
            {
                type: "A",
                score: 0,
            },
            {
                type: "N",
                score: 0,
            },
        ],
    ];

    // 테스트 결과 합산
    survey.forEach((category, idx) => {
        let choice = choices[idx];
        if(choice !== REFERENCE_VALUE) {
            mbtiArr[mbtiIdxObj[category.at(0)]].map(obj => {
                if(obj.type === category.at(choice < REFERENCE_VALUE ? 0 : 1)) {
                    obj.score += Math.abs(choice - REFERENCE_VALUE);
                }
            });
        }
    });

    return mbtiArr.map(([mbti1, mbti2]) => mbti1.score < mbti2.score ? mbti2.type : mbti1.type).join("");
}