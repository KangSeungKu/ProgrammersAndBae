const solution1 = angle => {
    let res = 0;

    if(angle === 180) {
        res = 4;
    } else if(angle > 90) {
        res = 3;
    } else if(angle === 90) {
        res = 2;
    } else {
        res = 1;
    }

    return res;
}

// '다른 사람의 풀이' 중 신박해서 추가.
const solution2 = angle => [0, 90, 91, 180].filter(x => angle >= x).length;