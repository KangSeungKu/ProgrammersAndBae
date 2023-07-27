const solution = (balls, share) => Math.round(getPactorial(balls) / (getPactorial(balls - share) * getPactorial(share)));

const getPactorial = n => n > 1 ? n * getPactorial(--n) : 1;