/*범위를 쪼개 bfs를 두 번 실행함
    1. start 에서 lever까지
    2. lever에서 end까지
    최솟값 + 최솟값 = 최소를 이용
*/
function solution(maps) {
    var answer = Infinity;
    const start = []; //start좌표
    const lever = [] //lever좌표
    let startToLever = 0; // start 부터 lever까지의 거리
    let leverToEnd = 0; // lever부터 end까지의 거리
    const dx = [-1 , 1, 0 , 0];
    const dy = [0 , 0 , -1 , 1] //좌우상하
    
    maps = maps.map((el , i)=> { //string으로 주어진 maps을 2차원 배열로 바꾸면서 Start위치와 Lever위치를 저장
        const arr = el.split('');
        if(arr.includes('S')){
            start.push([i , arr.indexOf('S') , 0 ])
        }
       if(arr.includes('L')){
            lever.push([i , arr.indexOf('L') , 0 ])
        }
        return arr
    });
    
    const visit_init = (array ,x ,y) => { //현재 위치를 true로 하는 visit를 판단해줄 배열을 생성해주는 함수
        const width = array[0].length
        const visit = Array.from(array, () => Array(width).fill(false));
        visit[x][y] = true
        return visit 
    }
    
    const height = maps.length; //maps의 최대 y값
    const width = maps[0].length; //maps의 최대 x값
  
    const bfs = (start, end) => {
        const visit = visit_init(maps , start[0], start[1]); //start를 방문한 것으로 하는 visit 함수 생성
        const queue = []; //bfs 큐
        queue.push(start); //초기 설정
        while(queue.length > 0){ //탈출 조건
            const [x, y, cnt] = queue.shift(); //FIFO
            if(maps[x][y] === end){ //end에 도착했을 시 
                return cnt; //현재 cnt 값을 리턴
            }
            for(let i = 0 ; i < dx.length; i++){
                const nx = x + dx[i];
                const ny = y + dy[i];
                if(0 <= nx && nx < height && 0 <= ny && ny < width && visit[nx][ny] === false && maps[nx][ny] !== 'X'){ //이동 조건
                    queue.push([nx, ny, cnt+1]); //이동
                    visit[nx][ny] = true;
                }
            }
        }
    }

    startToLever = bfs(start.pop(),'L');//cnt를 리턴하지 않는 경우 undefined를 리턴
    leverToEnd = bfs(lever.pop(),'E'); //cnt를 리턴하지 않는 경우 undefined를 리턴
    
    
    startToLever + leverToEnd ? answer = startToLever + leverToEnd : answer = -1 //number + undefined = undefined와 undefined가 falsy 값을 갖는 것을 이용
    
    return answer;
}
