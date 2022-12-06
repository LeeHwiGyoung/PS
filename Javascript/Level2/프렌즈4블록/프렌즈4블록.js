function solution(m, n, board) { //n이 x  m이 y
    var answer = 0;
    board = board.map(v=>v.split(""));
    let remove = new Array(m);
    for (let i = 0; i < m ; i++)
        remove[i] = new Array(n).fill(false);
    
    while(1){
        let find = false;
        for(let i = 0 ; i < m - 1 ; i++){ //찾기
            for(let j = 0 ; j < n - 1 ; j++){         
                if(board[i][j] === '0')
                    continue;
                else {
                    const standard = board[i][j];
                    if(standard === board[i][j+1]
                    && standard === board[i+1][j]
                    && standard === board[i+1][j+1]){ 
                        find = true;
                        remove[i][j] = true;
                        remove[i][j+1] = true;
                        remove[i+1][j] = true;
                        remove[i+1][j+1] = true;
                    }
                }
            }
        }
        
        if(find === false) //탈출조건
            break;
        
        for(let i = 0 ; i < m ; i++){ // 부수면서 count
            for(let j = 0 ; j < n ; j++){
                if(remove[i][j] === true){
                    answer++;
                    remove[i][j] = false;
                    board[i][j] = '0';
                }               
            }
        }
    
        for(let i = m - 1; i >= 0; i--){//재정렬
            for(let j = 0;  j < n ; j++){
                if(board[i][j] === '0'){
                    for(let k = i - 1 ;  k >= 0; k--)
                        if(board[k][j] !== '0'){
                            board[i][j] = board[k][j];
                            board[k][j] = '0'
                            break;
                        }
                }
            }
        }
    }
  
    return answer;
}
