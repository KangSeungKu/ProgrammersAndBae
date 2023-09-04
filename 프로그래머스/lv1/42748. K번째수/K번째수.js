/**
 * K번째수
 * 
 * @param {Array} array 
 * @param {Array} commands 
 * @returns 
 */
const solution = (array, commands) => commands.map(([i, j, k]) => array.slice(i-1, j).sort((a, b) => a - b).at(k-1));