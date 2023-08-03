const solution = (keymap, targets) => {
    return targets.map(target => {
        let res = [...target].reduce((acc, cur) => acc + Math.min(...keymap.slice().map(key => key.indexOf(cur) + 1).filter(n => n)), 0);
        return isFinite(res) ? res : -1;
    });
}