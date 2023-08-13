/**
 * 햄버거 만들기
 * 
 * 정해진 순서(아래서부터, 빵 – 야채 – 고기 - 빵)
 * 1: 빵
 * 2: 야채
 * 3: 고기
 * @param {Array} ingredient 재료의 정보를 나타내는 정수 배열
 * @returns 
 */
const solution = ingredient => {
    const COMBINATION_ARRAY = [1,2,3,1];
    const cookArr = [];

    let answer = 0;

    ingredient.forEach(n => {
        cookArr.push(n);
        
        if(cookArr.length >= COMBINATION_ARRAY.length) {
            let flag = false;

            COMBINATION_ARRAY.some((seq, idx) => {
                if(seq !== cookArr.at(COMBINATION_ARRAY.length * (-1) + idx)) {
                    flag = true;
                    return flag;
                }
            });

            if(!flag) {
                answer++;
                COMBINATION_ARRAY.forEach(_ => cookArr.pop());
            }
        }
    });
    
    return answer;
}