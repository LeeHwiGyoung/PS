function solution(board)
{
    const dp = Array.from(board, (_,i)=> [...board[i]]); //dp 배열 초기화
    const row = board.length;
    const col = board[0].length;
    let maxSquare = 0;
    
    for(let i = 0 ; i < row ; i++){
        for(let j = 0 ; j < col ; j++){    
            if(board[i][j] && i !== 0  && j !== 0){ //board[i][j] 가 1 이고 i 와 j 가 0이 아니면
                dp[i][j] = Math.min(dp[i-1][j-1],dp[i][j-1],dp[i-1][j]) + 1; 
            }   
            maxSquare = Math.max(maxSquare, dp[i][j])
        }
    }

    return maxSquare**2;
}
