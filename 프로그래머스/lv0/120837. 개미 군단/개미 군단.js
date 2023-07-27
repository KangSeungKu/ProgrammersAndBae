const GENERALANTPOWER = 5;
const SOLDIERANTPOWER = 3;

const solution = hp => {
    let ant = ~~(hp/GENERALANTPOWER);
    let remainHp = hp % GENERALANTPOWER;

    if(remainHp) {
        ant += ~~(remainHp/SOLDIERANTPOWER);
        remainHp = remainHp % SOLDIERANTPOWER;
    }

    return ant + remainHp;
}