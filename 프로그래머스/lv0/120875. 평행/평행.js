const solution = (dots) => {
    const [x1, y1] = dots.pop();

    let searchFlag = false;
    let tempDots = dots;

    for(let i = 0; i < dots.length; i++) {
        const [[x2, y2], [x3, y3], [x4, y4]] = tempDots;
        if(getSlope(x1, y1, x2, y2) === getSlope(x3, y3, x4, y4)) {
            searchFlag = true;
            break;
        } 

        tempDots = [tempDots.at(-1), ...tempDots.slice(0,2)];
    }

    return +searchFlag;
}

const getSlope = (x1, y1, x2, y2) => (x2 - x1) / (y2 - y1);