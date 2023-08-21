/**
 * 부족한 금액 계산하기
 * 
 * @param {Number} price 원래 이용료
 * @param {Number} money 가지고 온 금액
 * @param {Number} count 놀이기구를 탄 횟수
 * @returns 모자란 금액
 */
const solution = (price, money, count) => {
    const insufficientMoney = price * count * (count + 1) / 2 - money;

    return insufficientMoney > 0 ? insufficientMoney : 0;
}