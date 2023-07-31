const solution = (players, callings) => {
    const rankObj = {};

    players.forEach((player, rank) => rankObj[player] = rank);
    callings.forEach(call => {
        let idx = rankObj[call];
        let tmpPlayer = players[idx-1];

        players[idx-1] = call;
        rankObj[call]--;

        players[idx] = tmpPlayer;
        rankObj[tmpPlayer]++;
    });

    return players;
}