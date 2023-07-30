const solution = (numer1, denom1, numer2, denom2) => {
    const numer = numer1 * denom2 + numer2 * denom1;
    const denom = denom1 * denom2;
    const lcm = fnGCD(numer, denom);

    return [numer/lcm, denom/lcm];
}

const fnGCD = (a, b) => (a % b) ? fnGCD(b, a % b) : b;