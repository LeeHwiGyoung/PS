
function solution(maps) {
    var answer = 0;
    const n = maps.length;
    const m = maps[0].length;
    let visit = new Array(n);
    for(let i = 0 ; i < visit.length ; i++)
        visit[i] = new Array(m).fill(false); //visit 배열
    
    const queue = [[0,0,1]]; // n , m , cnt
    
    const moveX = [0,0,-1,1]
    const moveY = [1,-1,0,0] //상 , 하 , 좌 , 우
    
    while(queue.length > 0){
        let [x,y,cnt] = queue.shift(); //배열의 앞 원소를 읽고 제거 
        if (x == n - 1  && y == m - 1) //도착하면
            return cnt;
        for(let i = 0 ; i < 4 ; i++){
            const nextX = x + moveX[i]; //다음 x좌표
            const nextY = y + moveY[i]; //다음 y좌표
            if(nextX >= 0 && nextX < n && nextY >= 0 && nextY < m){ //x와 y의 범위가 맵 안이면
                if(maps[nextX][nextY] == 1 && visit[nextX][nextY] == false){ //맵이 길이고 아직 방문한 적이 없다면
                    visit[nextX][nextY] = true;
                    queue.push([nextX, nextY, cnt + 1]);
                }
            }
                    
        }
    }
    return -1;
}
