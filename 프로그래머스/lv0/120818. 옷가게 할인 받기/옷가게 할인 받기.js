const solution = price => {
    let total = 0;

    if(price >= 500000) total = price - price / 100 * 20;
    else if(price >= 300000) total = price - price / 100 * 10;
    else if(price >= 100000) total = price - price / 100 * 5;
    else total = price;

    return ~~total;
}