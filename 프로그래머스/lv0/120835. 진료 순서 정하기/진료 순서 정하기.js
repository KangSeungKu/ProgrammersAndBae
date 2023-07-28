const solution = emergency => {
    const mapRank = new Map();

    emergency.slice().sort((a, b) => b - a).forEach((score, rank) => {
        mapRank.set(score, rank + 1);
    })

    return emergency.map(score => mapRank.get(score));
}