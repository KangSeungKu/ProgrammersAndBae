const solution = (cards1, cards2, goal) => {
    const answer = [];

    goal.forEach(word => {
        if(word === cards1.at(0)) {
            answer.push(cards1.shift());
        } 

        if(word === cards2.at(0)) {
            answer.push(cards2.shift());
        }
    });

    return goal.join("") === answer.join("") ? "Yes" : "No";
}