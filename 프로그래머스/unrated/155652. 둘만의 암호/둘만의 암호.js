const solution = (s, skip, index) => {
    const skipArr = [...skip].map(ch => ch.charCodeAt());
    let sArr = [...s].map(ch => ch.charCodeAt());

    sArr = sArr.map(ascii => {
        let term = index;
        while(term) {
            ascii += ascii > 121 ? (-25) : 1;

            if(!skipArr.includes(ascii)) {
                term--;
            }
        }

        return ascii;
    });

    return String.fromCharCode(...sArr);
}