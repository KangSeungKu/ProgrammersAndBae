const solution = board => {
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