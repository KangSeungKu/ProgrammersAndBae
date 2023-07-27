const solution = (num_list, n) => {
    const res = [];

    for(let i = 0; i < num_list.length / n; i++) {
        res.push(num_list.slice(i*n, (i*n)+n));
    }

    return res;
}