const solution = (players, callings) => {
    const playersMap = new Map();   // { 0 => 'mumu', 1 => 'soe', 2 => 'kai', 3 => 'poe', 4 => 'mine' }
    const playersRankMap = new Map();   // { 'mumu' => 0, 'soe' => 1, 'poe' => 3, 'kai' => 2, 'mine' => 4 }

    // Map initialization
    for(let i = 0; i < players.length; i++) {
        playersMap.set(i, players[i]);
        playersRankMap.set(players[i], i);
    }

    callings.forEach(player => {
        // Swap
        let idx = playersRankMap.get(player); // 3
        let tmpPlayer = playersMap.get(idx - 1); // "poe"

        // Players reconstruct
        playersMap.set(idx - 1, player);  // 2: "poe" -> 2: "kai"
        playersMap.set(idx, tmpPlayer);  // 3: "kai" -> 3: "poe"

        // Rank reconstruct
        playersRankMap.set(player, idx - 1); // "poe": 2 -> "kai": 2
        playersRankMap.set(tmpPlayer, idx); // "kai": 3 -> "poe": 3
    });

    return [...playersMap.values()];
};