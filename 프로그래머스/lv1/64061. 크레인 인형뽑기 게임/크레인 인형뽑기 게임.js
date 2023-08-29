/**
 * 크레인 인형뽑기 게임
 * 
 * @param {Array} board 게임 화면의 격자의 상태가 담긴 2차원 배열
 * @param {Array} moves 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열
 * @returns 
 */
const solution = (board, moves) => {
    let answer = 0;
    let bucket = [];

    moves.forEach(move => {
        board.some((line, idx) => {
            if(line[move-1]) {
                if(bucket.at(-1) === line[move-1]) {
                    bucket.pop();
                    answer += 2;
                } else {
                    bucket.push(line[move-1]);
                }

                line[move-1] = 0;
                return true;
            }
        })
    })

    return answer;
}