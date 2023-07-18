const solution = lines => {
    const mapMergedLine = new Map();
    let line = 0;

    for([start, end] of lines) {
        for(let i = start; i < end; i++) {
            mapMergedLine.has(i) ? mapMergedLine.set(i, mapMergedLine.get(i) + 1) : mapMergedLine.set(i, 0);
        }
    }

    for([_, value] of mapMergedLine) {
        line += value > 0 ? 1 : 0;
    }

    return line;
}