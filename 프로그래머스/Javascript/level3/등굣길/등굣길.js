function solution(m, n, puddles) {
    var answer = 0;
    
    let road = Array.from({length : n + 1} , () => new Array(m + 1).fill(0)); //격자 생성
    
    for(let i = 0 ; i < puddles.length ; i++){ //물에 잠긴 곳 설정
        const [m, n] = puddles[i];
        road[n][m] = -1
    }
    
    if(road[1][2] === 0) //초기 설정 집에서 오른쪽으로 가는 경우
        road[1][2] = 1;
    
    if(road[2][1] === 0)  //초기 설정 집에서 아래로 가는 경우
        road[2][1] = 1;
    
    for(let i = 1 ; i < n + 1 ; i ++){
        for(let j = 1 ; j  < m + 1 ; j++){
            if(road[i][j] === -1) //물에 잠긴곳이면 
                continue;
            if(road[i-1][j] !== -1){//현재자리까지 윗길을 통해 온 경우
                road[i][j] = (road[i][j] + road[i-1][j]) % 1000000007
            }
            if(road[i][j-1] !== -1){ //현재자리까지 왼쪽 길을 통해 온 경우
                road[i][j] = (road[i][j] + road[i][j-1]) % 1000000007
            }
        }
    }
    
    answer = road[n][m]
    return answer;
}
