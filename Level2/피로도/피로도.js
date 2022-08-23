function solution(k, dungeons) {
    var answer = -1;
    let visit = new Array(dungeons.length).fill(false);
    function dfs(k,cnt){
       
        if(cnt > answer)
            answer = cnt;
        for(let i = 0 , max = dungeons.length; i < max ; i++){
            if(k >= dungeons[i][0] && visit[i] == false){
                visit[i] = true;
                dfs(k - dungeons[i][1] , cnt + 1 );
                visit[i] = false;
            }
        }
    }
    
    dfs(k,0);
  
    return answer;
}
