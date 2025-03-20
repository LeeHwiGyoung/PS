function solution(n, q, ans) {
    let answer = 0;

    const numArr = Array.from({ length: n }, (_, idx) => idx + 1);

    const dfs = (start, temp) => {
        if (temp.length === 5) {
            for (let i = 0; i < q.length; i++) {
                const sameNum = q[i].filter(el => temp.includes(el)).length;
                if (sameNum !== ans[i]) {
                    return; // 조건을 만족하지 않으면 종료
                }
            }
            answer++;
            return;
        }

        for (let i = start; i < numArr.length; i++) {
            temp.push(numArr[i]);
            dfs(i + 1, temp);
            temp.pop();
        }
    };

    dfs(0, []);
    
    return answer;
}
