/*
win[1] = [2]
win[2] = [5]
win[3] = [2]
win[4] = [3 ,2 ]
win[5] = []

lose[1] =[]
lose[2] = [1, 3, 4]
lose[3] = [4]
lose[4] = []
lose[5] = [2]
*/
function solution(n, results) {
    var answer = 0;
    let win = {}
    let lose = {}
    const bfs = (graph, start) => {
        const queue = [start]
        const visit = Array.from({length : n + 1} ,_=> false ) //중복 방문 방지
        visit[start] = true;
        let result = 0;
        while(queue.length > 0){
            const cur = queue.shift(); 
            for(let i = 0; i < graph[cur].length ; i++){
                const next = graph[cur][i]; 
                if(visit[next] === false){
                    visit[next] = true;
                    queue.push(next);
                    result ++;
                }
            } 
        }
        
        return result;
    }
    
    for(let i = 1 ; i <= n ; i++){
        win[i] = []
        lose[i] = []
    }
    
    for(let i = 0 ; i < results.length; i++){
        const [winner, loser] = results[i];
        win[winner].push(loser)
        lose[loser].push(winner)
    }

    for(let i = 1 ; i <= n ; i++){
        if(bfs(win, i) + bfs(lose , i) === n-1)
            answer++
    }
    return answer;
}
