const solution1 = (spell, dic) => dic.filter(str => spell.filter(ch => str.includes(ch)).length === spell.length).length ? 1 : 2;
const solution2 = (spell, dic) => dic.filter(str => spell.every(ch => str.includes(ch))).length ? 1 : 2;