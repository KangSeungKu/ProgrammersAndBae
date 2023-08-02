const FILES_COLUMN = "#";

const solution = (wallpaper) => {
    const xAxis = [];
    const yAxis = [];

    wallpaper.forEach((x, i) => {
        [...x].forEach((item, j) => {
            if(item === FILES_COLUMN) {
                xAxis.push(i);
                yAxis.push(j);
            }
        });
    });

    return [Math.min(...xAxis), Math.min(...yAxis), Math.max(...xAxis)+1, Math.max(...yAxis)+1]
}