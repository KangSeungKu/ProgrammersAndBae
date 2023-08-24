/**
 * 로또의 최고 순위와 최저 순위
 * 
 * @param {Array} lottos 구매한 로또 번호를 담은 배열
 * @param {Array} win_nums 당첨 번호를 담은 배열
 * @returns 
 */
const solution = (lottos, win_nums) => {
    let blankNumbers = 0;
    let winningNumbers = 0;

    lottos.forEach(n1 => {
        if(n1 === 0) {
            blankNumbers++;
        } else {
            win_nums.forEach(n2 => {
                if(n1 === n2) {
                    winningNumbers++;
                }
            });
        }
    });

    return [blankNumbers + winningNumbers === 0 ? lottos.length : lottos.length - (blankNumbers + winningNumbers) + 1, 
        lottos.length - winningNumbers + 1 > lottos.length ? lottos.length : lottos.length - winningNumbers + 1 ];
}