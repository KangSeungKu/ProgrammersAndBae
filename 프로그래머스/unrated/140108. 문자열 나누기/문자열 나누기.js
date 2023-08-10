const solution = s => {
    const chArr = [...s];
    let answer = 0;
    
    while(chArr.length > 1) {
        const referenceCh = chArr.shift();
        let sameCnt = 1;
        let diffCnt = 0;

        while(sameCnt !== diffCnt) {
            referenceCh === chArr.shift() ? sameCnt++ : diffCnt++;
        }

        answer++;
    }

    return !chArr.length ? answer : ++answer;
}