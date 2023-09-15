process.stdin.setEncoding('utf8').on('data', data => {
    const [a, b] = data.split(" ");
    const PRINT_SYMBOL = "*";

    for(let i = 0; i < b; i++) {
        console.log(PRINT_SYMBOL.repeat(a));
    }
});