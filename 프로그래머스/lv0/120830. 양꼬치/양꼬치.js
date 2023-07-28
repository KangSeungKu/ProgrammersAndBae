const LAMB_SKEWERS = 12000;
const DRINK = 2000;
const SERVICE_CNT = 10;

const solution = (n, k) => LAMB_SKEWERS * n + DRINK * k - DRINK * ~~(n / SERVICE_CNT);