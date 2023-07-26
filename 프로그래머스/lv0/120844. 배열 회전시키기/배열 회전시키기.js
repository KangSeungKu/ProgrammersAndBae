const solution = (numbers, direction) => controller[direction](numbers);

const controller =  {
    right: (arr) => [arr.at(-1), ...arr.slice(0, arr.length - 1)], 
    left: (arr) => [...arr.slice(1, arr.length), arr[0]],
}