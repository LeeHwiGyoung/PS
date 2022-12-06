function solution(n) {
    var answer = 0;
    let dp = [1, 2];
    for(let i = 2 ; i < n ; i++){
        dp[i] = (dp[i-2] + dp[i-1])%1234567;
    }
    answer = dp[n-1];
    return answer;
}
