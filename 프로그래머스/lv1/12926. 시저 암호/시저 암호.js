/**
 * 시저 암호
 * 
 * @param {String} s 문자열
 * @param {Number} n 거리
 * @returns s를 n만큼 민 암호문
 */
const solution = (s, n) => {
    return [...s].map(ch => {
        const ascii = ch.charCodeAt();
        let convAlpha = ch;

        if(64 < ascii && ascii < 91) {
            convAlpha = String.fromCharCode((ascii + n - 65) % 26 + 65);
        } else if(96 < ascii && ascii < 123) {
            convAlpha = String.fromCharCode((ascii + n - 97) % 26 + 97);
        } else {
    
        }

        return convAlpha;
    }).join("");
}