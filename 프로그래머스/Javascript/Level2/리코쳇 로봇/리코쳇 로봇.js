function solution(board) {
    const boardArr = Array.from(board, (el) => el.split(''))
    const visit = boardArr.map((el)=> el.map(_=> false))
    const direction = ["up" , "right" , "left" , "down"];
    const move = { "up": [-1, 0], "right": [0, 1], "left": [0, -1], "down": [1, 0] };
    const queue = [];
    const width = boardArr[0].length;
    const height = boardArr.length;
    
    const findPosition = () =>  {
        let rPos;
        let gPos;
        boardArr.forEach((row , i)=>{
            const rFind = row.indexOf('R');
            const gFind = row.indexOf('G');
            if(rFind !== -1){
                rPos = [i , rFind]
            }
            if(gFind !== -1){
                gPos = [i, gFind];
            }
        });
        return {rPos , gPos}
    }
    
    const moveRobot = (x, y, direction) => {
        const [dx, dy] = move[direction];
        let nx = x;
        let ny = y;
        
        while (true) {
            let nextX = nx + dx;
            let nextY = ny + dy;
            
            if (nextX < 0 || nextX >= height || 
                nextY < 0 || nextY >= width || 
                boardArr[nextX][nextY] === 'D') {
                return [nx, ny];
            }
            
            nx = nextX;
            ny = nextY;
        }
    }
    
  
    const {rPos , gPos} = findPosition();
    
    
    queue.push([...rPos, 0]);
    visit[rPos[0]][rPos[1]] = true;  // 초기 위치 방문 체크
    
    while(queue.length){
        const [x, y, cnt] = queue.shift(); 
        if(boardArr[x][y] === 'G'){
            return cnt;
        }
        
        for(const dir of direction){
            const [nx, ny] = moveRobot(x,y,dir);
            if (!visit[nx][ny]) {
                visit[nx][ny] = true;
                queue.push([nx, ny, cnt + 1]);
            }
        }
    }
    
    return -1;  // 도달할 수 없는 경우
}
