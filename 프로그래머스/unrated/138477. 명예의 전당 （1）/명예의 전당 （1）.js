const solution = (k, score) => score.reduce((acc, _, idx, src) => (acc.push(Math.min(...src.slice(0, idx + 1).sort((a, b) => b - a).slice(0, k))), acc), []);