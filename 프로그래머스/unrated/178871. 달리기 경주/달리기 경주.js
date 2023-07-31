// 데이터가 많을 경우, timeout현상을 맞게 됨.
// const solution = (players, callings) => callings.reduce((acc, cur) => swap(acc, cur), players.slice());

// const swap = (arr, item) => {
//     let tmpArr = arr.slice();
//     let idx = tmpArr.indexOf(item);
//     let temp = tmpArr[idx - 1];

//     tmpArr[idx - 1] = tmpArr[idx];
//     tmpArr[idx] = temp;

//     return tmpArr;
// }

// 데이터가 많을 경우, timeout현상을 맞게 됨.
// const solution = (players, callings) => {
//     const callingsLength = callings.length;
//     for(let i = 0; i < callingsLength; i++) {
//         swap(players, callings[i]);
//     }

//     return players;
// };

// const swap = (arr, item) => {
//     let idx = arr.indexOf(item);
//     let temp = arr[idx - 1];

//     arr[idx - 1] = arr[idx];
//     arr[idx] = temp;
// }


// 초기 Map을 이용한 방법
const solution1 = (players, callings) => {
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

// '다른 사람의 풀이'를 참고하여 개선한 방법
const solution2 = (players, callings) => {
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