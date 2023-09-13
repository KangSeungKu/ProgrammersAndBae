/**
 * 소수 만들기
 * 
 * @param {Array} nums 숫자들이 들어있는 배열
 * @returns 
 */
const solution = nums => {
    let answer = 0;

    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            for(let z = j + 1; z < nums.length; z++) {
                answer += isPrime(nums[i] + nums[j] + nums[z]) ? 1 : 0;
            }
        }
    }

    return answer;
}

const isPrime = num => {
    for(let i = 2; i <= Math.sqrt(num); i++){
      if(num % i === 0){
        return false; 
      }
    }

    return true; 
}