const solution = array => {
    const aggre = new Array(Math.max(...array) + 1).fill(0);
    let lowestValue = 0;

    array.forEach(num => aggre[num]++);
    lowestValue = Math.max(...aggre);

    return findDuplicates(aggre).includes(lowestValue) ? -1 : aggre.indexOf(lowestValue);
}

const findDuplicates = arr => {
    const distinct = new Set(arr);
    const filtered = arr.filter(item => {
        if (distinct.has(item)) {
            distinct.delete(item);
        } else {
            return Number.isFinite;
        }
    });
 
    return [...new Set(filtered)];
}