/**
 * 2016년
 * 
 * @param {Number} a 월
 * @param {Number} b 일
 * @returns 무슨 요일인지 리턴
 */
const solution1 = (a, b) => {
    const YEAR = 2016;
    const week = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    return week[new Date([YEAR,("00" + a).slice(-2),("00" + b).slice(-2)].join("-")).getDay()];
}

const solution2 = (a, b) => new Date(2016, a-1, b).toString().slice(0,3).toUpperCase();