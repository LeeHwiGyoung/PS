function solution(land) {
    var answer = 0; 
    const oil = new Array(land[0].length).fill(0); //x좌표에 시추관을 뚫었을 때 얻을 수 있는 석유
    
    const width = land[0].length;
    const height = land.length;
    const visit = Array.from(land , () => Array(width).fill(false))
    const move = [[1,0], [-1,0] , [0 , 1] , [ 0 , -1]]
    let cnt = 1;
   
    const bfs = (x , y) => {
        const queue = [];
        const xVisit = new Array(land[0].length).fill(false); //x값 한 번에 올리기 위하여 bfs도중 방문한 x좌표 확인 배열
        queue.push([x,y ,cnt]);
        
        while(queue.length > 0){
            const [x, y] = queue.pop();
            xVisit[y] = true;
            for(let i = 0 ; i < 4 ; i++){
                const nx = x - move[i][0];
                const ny = y - move[i][1];
                if( 0 <= nx && nx < height && 0<= ny && ny < width && land[nx][ny] === 1 && visit[nx][ny] === false){
                    visit[nx][ny] = true;
                    queue.push([nx,ny]);
                    cnt ++;
                }   
            }
        }
      
        for(let i = 0 ; i < xVisit.length ; i++){
            if(xVisit[i] == true){
                oil[i] += cnt;          
            } 
        }
        cnt = 1;
    
    }
    
    for(let i = 0 ; i < height ; i++){
        for(let j = 0 ; j < width ; j++){
            if(land[i][j] === 1 && visit[i][j] === false){
                visit[i][j] = true; //석유 덩어리 재방문을 피하기 위함
                bfs(i,j);
            }    
        }
    }
    
    oil.sort((a,b)=> b-a); //내림차순 정렬
    
    return oil[0];
}
