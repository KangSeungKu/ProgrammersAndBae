/**
 * 옹알이 (2)
 * 
 * "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못함.
 * 같은 발음을 하는 것을 어려워함.
 * 
 * @param {Array} babbling 문자열 배열
 * @returns 발음할 수 있는 단어의 개수
 */
const solution = babbling => {
    const babList = ["aya", "ye", "woo", "ma"];

    return babbling.filter(bab => {
        let flag = true;

        babList.some(str => {
            while(bab.includes(str)) {
                if(bab.indexOf(str) === bab.replace(str, "").indexOf(str)) {
                    flag = false;
                    return true;
                } else {
                    bab = bab.replace(str, "*");
                }
            }
        });

        if(flag && !bab.replaceAll("*", "")) return true;
    }).length;
}