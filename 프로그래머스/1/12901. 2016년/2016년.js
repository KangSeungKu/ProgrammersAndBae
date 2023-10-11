/**
 * 2016년
 * 
 * @param {Number} a 월
 * @param {Number} b 일
 * @returns 무슨 요일인지 리턴
 */
const solution = (a, b) => {
    const YEAR = 2016;
    const week = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    return week[new Date([YEAR,("00" + a).slice(-2),("00" + b).slice(-2)].join("-")).getDay()];
}