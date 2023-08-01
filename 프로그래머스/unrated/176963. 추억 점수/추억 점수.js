// 처음 풀었을 때 방법
const solution1 = (name, yearning, photo) => {
    const memoryScoreObj = {};
    let answer = 0;

    name.forEach((nm, idx) => memoryScoreObj[nm] = yearning[idx]);
    answer = photo.map(phArr => phArr.reduce((acc, cur) => acc + (isNaN(memoryScoreObj[cur]) ? 0 : memoryScoreObj[cur]), 0));

    return answer;
}

// ES6 문법을 활용한 방법 (다른 사람의 풀이)
// map, reduce함수를 사용한 것은 동일.
// 별도의 Object를 사용하지 않고 파라미터로 들어온 Array를 그대로 사용.
// 널 병합 연산자(??)를 이용하여 '그리움 점수'가 없을 때를 처리.
const solution2 = (name, yearning, photo) => photo.map((ph)=> ph.reduce((acc, cur)=> acc += yearning[name.indexOf(cur)] ?? 0, 0));