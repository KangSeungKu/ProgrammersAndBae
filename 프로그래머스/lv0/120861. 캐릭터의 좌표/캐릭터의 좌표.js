const solution = (keyinput, board) => {
    const [maxW, maxH] = board.map(n => (n - 1) / 2);   
    return keyinput.reduce((acc, cur) => {
        let tmpControl = controller[cur](acc);
        return checkArea(tmpControl, maxW, maxH) ? tmpControl : acc;
    }, [0,0]);
}

const controller = {
    up: ([a, b]) => [a, ++b],
    down: ([a, b]) => [a, --b],
    left: ([a, b]) => [--a, b],
    right: ([a, b]) => [++a, b],
}

const checkArea = ([x, y], maxW, maxH) => Math.abs(x) <= maxW && Math.abs(y) <= maxH ? true : false;