const solution = polynomial => {
    const polyn = polynomial.replaceAll(" + ", " ").split(" ");
    let res = "";
    let x = 0;
    let con = 0;

    polyn.forEach(n => {
        if(n.includes("x")) {
            x += n.length === 1 ? 1 : Number(n.replace("x", ""));
        } else {
            con += Number(n);
        }
    });

    res = x === 1 ? "x" : x > 1 ? x + "x" : "";
    res += con === 0 ? "" : x > 0 ? " + " + con : con;

    return res;
}