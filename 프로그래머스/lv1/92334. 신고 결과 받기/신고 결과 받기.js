/**
 * 신고 결과 받기
 * 
 * 
 * @param {Array} id_list 이용자의 ID가 담긴 문자열 배열
 * @param {Array} report 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열
 * @param {Number} k 정지 기준이 되는 신고 횟수
 * @returns 각 유저별로 처리 결과 메일을 받은 횟수 배열
 */
const solution = (id_list, report, k) => {
    const id_listObj = id_list.reduce((acc, cur) => (acc[cur] = 0, acc), {});
    const reportMap = report.reduce((acc, cur) => {
        let [reportor, suspect] = cur.split(" ");

        if(acc.has(suspect)) {
            acc.get(suspect).add(reportor);
        } else {
            acc.set(suspect, new Set().add(reportor));
        }

        return acc;
    }, new Map);

    reportMap.forEach(reportorSet => {
        if(reportorSet.size >= k) {
            reportorSet.forEach(id => {
                id_listObj[id]++;
            });
        }
    });

    return [...Object.values(id_listObj)];
}