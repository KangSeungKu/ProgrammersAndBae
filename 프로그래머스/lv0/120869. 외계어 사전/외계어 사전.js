const solution = (spell, dic) => dic.filter(str => spell.filter(ch => str.includes(ch)).length === spell.length).length ? 1 : 2;