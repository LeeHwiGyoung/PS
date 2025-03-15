function solution(storage, requests) {
    let answer = 0;

    const containers = storage.map(row => row.split(""));
    const isEmpty = Array.from({ length: containers.length }, () =>
        Array(containers[0].length).fill(false)
    );

    const maxRowIndex = containers.length - 1;
    const maxColIndex = containers[0].length - 1;

    const dx = [1, 0, 0, -1];
    const dy = [0, 1, -1, 0];

    // 🔹 BFS를 활용하여 출구까지 도달 가능 여부 판단
    const canReachEdge = (startX,startY, copyIsEmpty) => {
        const visited = Array.from({ length: containers.length }, () =>
            Array(containers[0].length).fill(false)
        );
        const queue = [[startX,startY]]

        while (queue.length) {
            const [x, y] = queue.shift();
            
            if (x === 0 || x === maxRowIndex || y === 0 || y === maxColIndex) {
                return true;
            }

            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];

                if (
                    nx >= 0 && nx <= maxRowIndex &&
                    ny >= 0 && ny <= maxColIndex &&
                    copyIsEmpty[nx][ny] === true && !visited[nx][ny]
                ) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }

        return false;
    };

    // 요청된 아이템 위치를 미리 queue에 넣고 처리
    const processRequests = (alpha) => {
        const queue = [];
        const copyIsEmpty = isEmpty.map(row => [...row]);

        const reach = []
        for (let row = 0; row <= maxRowIndex; row++) {
            for (let col = 0; col <= maxColIndex; col++) {
                if (containers[row][col] === alpha && !isEmpty[row][col]) {
                    queue.push([row, col]);
                }
            }
        }

        queue.forEach(([startX,startY])=> {
            if(canReachEdge(startX,startY,copyIsEmpty)){
                reach.push([startX,startY])
            }
        })
      
        reach.forEach(([x,y]) => (isEmpty[x][y] = true))
    };

    //두 번 요청이면 즉시 제거
    const takeAllTargetAlpha = (alpha) => {
        for (let row = 0; row <= maxRowIndex; row++) {
            for (let col = 0; col <= maxColIndex; col++) {
                if (containers[row][col] === alpha) {
                    isEmpty[row][col] = true;
                }
            }
        }
    };

    //요청 처리
    requests.forEach((request) => {
        if (request.length === 2) {
            takeAllTargetAlpha(request[0]);
        } else {
            processRequests(request);
        }
    });

    //남아있는 물건 개수 계산
    for (let row = 0; row <= maxRowIndex; row++) {
        for (let col = 0; col <= maxColIndex; col++) {
            if (!isEmpty[row][col]) {
                answer++;
            }
        }
    }

    return answer;
}
