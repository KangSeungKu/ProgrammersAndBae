const solution = (name, yearning, photo) => {
    const memoryScoreObj = {};
    let answer = 0;

    name.forEach((nm, idx) => memoryScoreObj[nm] = yearning[idx]);
    answer = photo.map(phArr => phArr.reduce((acc, cur) => acc + (isNaN(memoryScoreObj[cur]) ? 0 : memoryScoreObj[cur]), 0));

    return answer;
}