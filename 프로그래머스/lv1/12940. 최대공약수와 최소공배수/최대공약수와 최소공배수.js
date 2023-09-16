/**
 * 최대공약수와 최소공배수
 * 
 * @param {Number} n 정수
 * @param {Number} m 정수
 * @returns [최대공약수, 최소공배수]
 */
const solution = (a, b) =>  {
    let r;
    for(var ab= a*b;r = a % b;a = b, b = r){}
    return [b, ab/b];
}