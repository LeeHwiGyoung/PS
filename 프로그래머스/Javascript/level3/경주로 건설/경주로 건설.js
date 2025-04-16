function solution(board) {
    let cost = Infinity;
    const width = board[0].length - 1;
    const height = board.length - 1;


    const makeVisit = () => {
        return Array.from(board, (row) => row.map(() => ({ visited: false, cost: Infinity })));
    }
    const move = {
        'up': [-1, 0],
        'down': [1, 0],
        'left': [0, -1],
        'right': [0, 1]
    }

    const bfs = (queue, visit) => {
        while (queue.length > 0) {
            const [x, y, currentCost, currentDirection] = queue.shift();

            if (x === width && y === height) {
                if (cost > currentCost) {
                    cost = currentCost;
                }
                continue;
            }

            for (const [direction, cord] of Object.entries(move)) {
                const nx = x + cord[0];
                const ny = y + cord[1];

                if (0 <= nx && nx <= width && 0 <= ny && ny <= height && board[nx][ny] === 0) {
                    let newCost = currentCost + 100;
                    if (currentDirection && direction !== currentDirection) {
                        newCost += 500;
                    }

                    if (newCost < visit[nx][ny].cost) {
                        visit[nx][ny].cost = newCost;
                        queue.push([nx, ny, newCost, direction]);
                    }
                }
            }
        }
    }

    const initialVisitRight = makeVisit();
    initialVisitRight[0][0].cost = 0;
    bfs([[0, 0, 0, 'right']], initialVisitRight);

    const initialVisitDown = makeVisit();
    initialVisitDown[0][0].cost = 0;
    bfs([[0, 0, 0, 'down']], initialVisitDown);

    return cost;
}
