// 일반 for문을 이용한 결과
const solution1 = board => {
    const range = board.length;
    let res = 0;

    for(let i = 0; i < range; i++) {
        for(let j = 0; j < range; j++) {
            let chk = 0;
            chk += i !== 0 ? !!board[i-1][j-1] + !!board[i-1][j] + !!board[i-1][j+1] : 0;
            chk += !!board[i][j-1] + !!board[i][j] + !!board[i][j+1];
            chk += i !== range - 1 ? !!board[i+1][j-1] + !!board[i+1][j] + !!board[i+1][j+1] : 0;

            res += chk > 0 ? 0 : 1;
        }
    }

    return res;
}

// 일반 for문을 forEach로 변경
const solution2 = board => {
    const range = board.length;
    let res = 0;

    board.forEach((elm, idx1, src) => elm.forEach((_, idx2) => {
        let chk = 0;
        chk += idx1 !== 0 ? !!src[idx1-1][idx2-1] + !!src[idx1-1][idx2] + !!src[idx1-1][idx2+1] : 0;
        chk += !!src[idx1][idx2-1] + !!src[idx1][idx2] + !!src[idx1][idx2+1];
        chk += idx1 !== range - 1 ? !!src[idx1+1][idx2-1] + !!src[idx1+1][idx2] + !!src[idx1+1][idx2+1] : 0;

        res += chk > 0 ? 0 : 1;
    }))

    return res;
}

// 다른풀이 중 괜찮다고 생각되는 코드
// outside라는 배열을 사용함으로서 코드량을 줄임.
// forEach문법을 이용한 반복
// 본인 값이 1인 경우 폭타의 위치이기 때문에 바로 false를 반환하도록 처리
// some함수를 사용하여 만족하는 값인 1이 발견되면 바로 false를 반환하도록 처리
// 옵셔널 체이닝을 사용하여 범위에서 벗어나는 값을 처리 (?.)
const solution3 = board => {

    const outside = [[-1,0], [-1,-1], [-1,1], [0,-1],[0,1],[1,0], [1,-1], [1,1]];
    let safezone = 0;

    board.forEach((row, y, self) => row.forEach((it, x) => {
        if (it === 1) return false;
        return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])
               ? false : safezone++;
    }));

    return safezone;
}