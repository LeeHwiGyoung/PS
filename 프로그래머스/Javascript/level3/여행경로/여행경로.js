function solution(tickets) {
    const answer = []
    const  graph = {};
    const num =  tickets.length + 1;
    const used = new Set();
    for(let i = 0 ; i < tickets.length ; i++){
        const [from , to]  = tickets[i]
        if(!graph[from]){
            graph[from] = [];
        }
        if(!graph[to]){
            graph[to] = [];
        }
        graph[from].push(to);
        graph[from].sort()
    }
    
    console.log(graph)
    const dfs = (current , route)  => {
        if(route.length === num){
            answer.push([...route])
            return
        }
        for(let i = 0 ; i < graph[current].length ; i++){
            const dest = graph[current][i];
            const ticket = `${current}to${dest}${i}`;
            if(!used.has(ticket)){ //아직 안 쓴거면
                used.add(ticket);
                route.push(dest)
                dfs(dest, route)
                route.pop()
                used.delete(ticket);
            }
        }
         
    }
    
    dfs('ICN' , ['ICN'])

    return answer[0];
}
