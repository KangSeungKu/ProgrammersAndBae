const solution = polynomial => {
    const polyn = polynomial.split(" + ");
    let res = [];
    let x = 0;
    let con = 0;

    polyn.forEach(n => {
        if(isNaN(n)) {
            x += Number(n.replace('x', '')) || 1;
        } else {
            con += Number(n);
        }
    });

    if(x) res.push(`${x === 1 ? '' : x}x`);
    if(con) res.push(con);

    return res.join(" + ");
}