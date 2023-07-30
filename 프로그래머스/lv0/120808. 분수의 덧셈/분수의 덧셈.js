const solution = (numer1, denom1, numer2, denom2) => {
    const numer = numer1 * denom2 + numer2 * denom1;
    const denom = denom1 * denom2;
    const lcm = getGCD(numer, denom);

    return [numer/lcm, denom/lcm];
}

const getGCD = (num1, num2) => {
  
    while(num2 > 0){
        let r = num1 % num2;
        num1 = num2;
        num2 = r;
    } 

    return num1;
}