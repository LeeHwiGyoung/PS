function solution(n, computers) {
    var answer = 0;
    let visit = new Array(n).fill(false);
    function dfs(idx){
        for(let i = 0 ; i < n ; i++){
            if(visit[i] == false && computers[idx][i] == 1 && idx != i){
                visit[i] = true;
                dfs(i);
            }
        }
    }
    
    for(let i = 0 ; i < n ; i++){
        if(visit[i] == false){
           visit[i] = true;
            dfs(i);
            answer++;
        }
    }

    
    return answer;
}
