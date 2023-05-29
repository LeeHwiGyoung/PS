function solution(x, y, n) {
    let dp = new Array(y+1).fill(-1); 
    dp[x] = 0; //dp 시작지점(x)를  0으로 설정

    for(let i = x ; i < y ; i++){ 
        if(dp[i]=== -1) //-1
            continue;
        const cur = dp[i]; //i로 변환되기까지 변환한 횟수 
        if(i*2 <= y){ //2배로 변환했을 때 y보다 작으면
            if(dp[i * 2] !== -1 && dp[i * 2] < cur + 1) //현재 기준 변환 횟수가 최소면
                continue;
            dp[i* 2] = cur + 1;
        }
        if(i*3 <= y){
             if(dp[i * 3] !== -1 && dp[i * 3] < cur + 1)
                 continue;
             dp[i* 3] = cur + 1;
        }
        if(i+n <= y){
             if(dp[i + n ] !== -1 && dp[i + n] < cur + 1)
                 continue;
            dp[i+n] = cur + 1;
        }
    }
    
    return dp[y];
}