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

function solution2(lines) {
    let line = new Array(200).fill(0);

    lines.forEach(([a, b]) => {
        for(; a < b; a++) line[a+100]++;
    });

    return line.reduce((a, c) =>  c > 1 ? a + 1 : a, 0)
}