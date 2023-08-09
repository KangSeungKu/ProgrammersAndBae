// 기존에 풀던 방식
const solution1 = (today, terms, privacies) => {
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

// '다른 사람의 풀이' 중 Date객체가 아닌 숫자계산만으로 처리하는 방식을 적용
const solution2 = (today, terms, privacies) => {
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