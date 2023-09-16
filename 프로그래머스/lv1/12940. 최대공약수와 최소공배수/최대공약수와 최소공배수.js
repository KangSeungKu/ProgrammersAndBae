/**
 * 최대공약수와 최소공배수
 * 
 * @param {Number} n 정수
 * @param {Number} m 정수
 * @returns [최대공약수, 최소공배수]
 */
const solution = (n, m) => [getGCD(n, m), getLCM(n, m)];

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