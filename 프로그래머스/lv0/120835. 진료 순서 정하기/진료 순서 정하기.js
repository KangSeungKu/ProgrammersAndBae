// Map객체를 사용했을 경우
const solution1 = emergency => {
    const mapRank = new Map();

    emergency.slice().sort((a, b) => b - a).forEach((score, rank) => {
        mapRank.set(score, rank + 1);
    })

    return emergency.map(score => mapRank.get(score));
}

// 배열의 indexOf를 사용했을 경우
const solution2 = emergency => {
    const rankingArr = emergency.slice().sort((a, b) => b - a);
    return emergency.map(score => rankingArr.indexOf(score) + 1);
}