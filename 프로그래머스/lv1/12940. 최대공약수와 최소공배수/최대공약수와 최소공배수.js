/**
 * 최대공약수와 최소공배수
 * 
 * @param {Number} n 정수
 * @param {Number} m 정수
 * @returns [최대공약수, 최소공배수]
 */
const solution1 = (n, m) => [getGCD(n, m), getLCM(n, m)];

const getGCD = (a, b) => (a % b) ? getGCD(b, a % b) : b;

const getLCM = (a, b) =>{
	let lcm = 1;
   
    while(true){
      if((lcm % a == 0) && (lcm % b == 0)){
        break;
      }
      lcm++;
    }
  	return lcm
}

// 최소공배수 구하는 다른 방법
const getLCM2 = (a, b) => (a * b) / getGCD(a, b);

// '다른 사람 풀이' 중 괜찮은 방법
// 단, 가독성이 매우 떨어짐.
const solution2 = (a, b) =>  {
    let r;
    for(var ab= a*b;r = a % b;a = b, b = r){}
    return [b, ab/b];
}