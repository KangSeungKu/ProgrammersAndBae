const STARTING_POINT = "S";
const MOVABLE_PASSAGE = "O";
const OBSTACLE = "X";

const directionObj = {
    N: ([h, w]) => [--h, w],
    S: ([h, w]) => [++h, w],
    W: ([h, w]) => [h, --w],
    E: ([h, w]) => [h, ++w],
}

const solution = (park, routes) => {
    let currentLocation = [];
    park.forEach((point, idx) => {
        if(point.includes(STARTING_POINT)) {
            currentLocation = [idx, point.indexOf(STARTING_POINT)];
        }
    });

    routes.forEach(route => currentLocation = moveRobotDog(park, currentLocation, route));

    return currentLocation;
}

const moveRobotDog = (map, cur, com) => {
    let tmpCur = cur.slice();
    let [direction, move] = com.split(" ");
    let obstacleFlag = false;

    while(move) {
        tmpCur = directionObj[direction](tmpCur);
        let [h, w] = tmpCur;

        if(!map[h]?.[w] || map[h]?.[w] === OBSTACLE) {
            obstacleFlag = true;
            move = 1;
        }

        move--;
    }

    return obstacleFlag ? cur : tmpCur;
}