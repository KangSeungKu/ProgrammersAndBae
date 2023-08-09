const solution = (today, terms, privacies) => {
    const answer = [];
    const termMap = new Map(terms.map(term => term.split(" ")));
    const todayDate = new Date(today);

    privacies.forEach((privacy, idx) => {
        const [date, termType] = privacy.split(" ");
        const privacyDate = new Date(date);
        const termDate = new Date(privacyDate.setMonth(privacyDate.getMonth() + Number(termMap.get(termType))));

        if(todayDate >= termDate) {
            answer.push(idx + 1);
        }
    });

    return answer;
}