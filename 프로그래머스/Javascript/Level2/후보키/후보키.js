function solution(relation) {
    let answer = 0;
    const columnsNums = relation[0].length;
    const rowNums = relation.length; // 튜플의 수
    const candidates = []; // 후보 키 저장

    // 특정 칼럼 조합이 유일성을 만족하는지 확인하는 함수
    const checkUnique = (columns) => {
        const selectedTuple = relation.map((tuple) =>
            columns.map((idx) => tuple[idx]).join('|')
        );
        return new Set(selectedTuple).size === rowNums;
    };

    // 특정 칼럼 조합이 최소성을 만족하는지 확인하는 함수
    const checkMinimality = (columns) => {
        for (let candidate of candidates) {
            if (candidate.every((col) => columns.includes(col))) {
                return false;
            }
        }
        return true;
    };

    // 모든 칼럼 조합 생성
    const generateCombinations = (columns, size) => {
        if (size === 1) return columns.map((col) => [col]);
        const result = [];
        columns.forEach((col, index) => {
            const rest = generateCombinations(columns.slice(index + 1), size - 1);
            rest.forEach((comb) => result.push([col, ...comb]));
        });
        return result;
    };

    // 1개에서 columnsNums까지 모든 조합 확인
    for (let size = 1; size <= columnsNums; size++) {
        const combinations = generateCombinations([...Array(columnsNums).keys()], size);
        for (let columns of combinations) {
            if (checkUnique(columns) && checkMinimality(columns)) {
                candidates.push(columns);
                answer++;
            }
        }
    }

    return answer;
}
