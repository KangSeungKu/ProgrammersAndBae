const solution = emergency => {
    const rankingArr = emergency.slice().sort((a, b) => b - a);
    return emergency.map(score => rankingArr.indexOf(score) + 1);
}