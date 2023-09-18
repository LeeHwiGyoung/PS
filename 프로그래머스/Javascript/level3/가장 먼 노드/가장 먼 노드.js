function solution(n, edge) {
    var answer = 0;
    
    let max = -Infinity; //Max 값
    
    let graph  = {}; //그래프 
    
    let queue = []; //BFS 활용
    
    let visit = Array.from({length : n + 1} , _ => false); //이미 방문한 노드를 체크해서 중복 방문 방지
    
    let distance = Array.from({length : n + 1} , _ => Infinity); //1번 노드와의 거리를 저장할 배열
    
    for(let i = 1 ; i <= n ; i++){
        graph[i] = [];
    }
    
    for(let i = 0 ; i < edge.length ; i++){
        const [v1 , v2 ] = edge[i];
        graph[v1].push(v2); 
        graph[v2].push(v1); //양방향 그래프
    }
    
    queue.push([1, 0]); //bfs 시작 조건 1번노드 거리 0
    
    while(queue.length > 0){
        const [curNode , dis] = queue.shift();
        if(distance[curNode] < dis){ //현재보다 돌아온 거리이면
            continue;
        }        
        distance[curNode] = dis; 
        
        for(let i = 0 ; i < graph[curNode].length ; i++){
            const next = graph[curNode][i];
            if(visit[next] == false && distance[next] > dis + 1){ //방문하지 않았으면서 현재보다 짧은 거리이면
              visit[next] = true;
              queue.push([next , dis+1]);
            }
        }
    }
    
    for(let i = 1 ; i < n + 1 ; i++ ){
        if(distance[i] > max){
            max = distance[i]
        }
            
    }
    
    for(let i = 1 ; i < n + 1 ; i++ ){
        if(distance[i] == max)
            answer++
    }
    
    return answer;
}
