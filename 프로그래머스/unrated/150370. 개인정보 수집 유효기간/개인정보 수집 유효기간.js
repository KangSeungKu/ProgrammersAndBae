const solution = (today, terms, privacies) => {
    const answer = [];
    const termMap = new Map(terms.map(term => term.split(" ")));
    const [year, month, day] = today.split(".").map(Number);
    const dates = year * 12 * 28 + month * 28 + day;

    privacies.forEach((privacy, idx) => {
        const [date, termType] = privacy.split(" ");
        const [pYear, pMonth, pDay] = date.split(".").map(Number);
        const termDates = pYear * 12 * 28 + pMonth * 28 + pDay + Number(termMap.get(termType)) * 28;

        if(dates >= termDates) {
            answer.push(idx + 1);
        }
    });

    return answer;
}