function solution(n, roads, sources, destination) {
    const distance = Array.from({length : n + 1 } , _ => -1);
    const graph = Array.from({length : n+1} ,  _ => []);
    const visit = Array.from({length : n} , _ => false); 
    
    roads.forEach((road) => {
        const [loc1 , loc2] = road;
        graph[loc1].push(loc2);
        graph[loc2].push(loc1)
    })
    
    const queue = [[destination , 0]];
    distance[destination] = 0; //출발지와 도착지가 일치하는 경우 초기화
    visit[destination] = true;
    while(queue.length > 0){ //bfs 시행
        const [cur , dist] = queue.shift();
        graph[cur].forEach((next)=> {
            if(!visit[next]){
                visit[next] = true;
                distance[next] = dist + 1;
                queue.push([next, dist + 1]);
            }
        })
    }
    
    return sources.map(source => distance[source]);
}

/*
function solution(n, roads, sources, destination) {
    const answer = Array.from({length : sources.length } , _ => -1);
    const graph = Array.from({length : n+1} ,  _ => []);
    roads.forEach((road) => {
        const [loc1 , loc2] = road;
        graph[loc1].push(loc2);
        graph[loc2].push(loc1)
    })
    
    
    sources.forEach((source,index)=> {
        const queue = [[source , 0]];
        const visit = Array.from({length : n} , _ => false); 
        while(queue.length > 0){
            const [location, count] = queue.shift();
            if(location === destination){ //도착한 경우
                answer[index] = count;
                break;
            }
            visit[location] = true;
            graph[location].forEach((next)=> {
                if(!visit[next]){
                    queue.push([next, count + 1]);
                }
            }) 
         }
    })
    return answer;
}
*/
