const solution = board => {
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