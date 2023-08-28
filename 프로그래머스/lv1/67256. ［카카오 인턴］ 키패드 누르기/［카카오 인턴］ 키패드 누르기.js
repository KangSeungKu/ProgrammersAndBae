/**
 * 키패드 누르기
 * 
 * @param {Array} numbers 순서대로 누를 번호가 담긴 배열
 * @param {String} hand 왼손잡이인지 오른손잡이인 지를 나타내는 문자열
 * @returns 
 */
const solution = (numbers, hand) => {
    const PHONENUMBER_POSITION = {
        0: "C",
        1: "L",
        2: "C",
        3: "R",
        4: "L",
        5: "C",
        6: "R",
        7: "L",
        8: "C",
        9: "R",
    }

    let answer = "";
    let leftPos = 10;
    let rightPos = 12;

    numbers.forEach(number => {
        const tmpNum = number === 0 ? 11 : number;
        let curHand = PHONENUMBER_POSITION[number];

        if(curHand === "C") {
            const [[curX, curY], [leftX, leftY], [rightX, rightY]] = [tmpNum, leftPos, rightPos].map(n => getConvPos(n));
            const diffLeft = Math.abs(curX - leftX) + Math.abs(curY - leftY);
            const diffRight = Math.abs(curX - rightX) + Math.abs(curY - rightY);

            if(diffLeft < diffRight) {
                curHand = "L";
            } else if(diffLeft > diffRight) {
                curHand = "R";
            } else {
                curHand = hand === "right" ? "R" : "L";
            }
        }

        if(curHand === "L") {
            leftPos = tmpNum;
        } else {
            rightPos = tmpNum;
        }

        answer += curHand;
    });

    return answer;
}

const getConvPos = n => [(n - 1) % 3, ~~((n - 1) / 3)];