function solution(board) {
    let xNum = 0; // 후공 횟수
    let oNum = 0; // 선공 횟수
    const boardArr = board.map((row)=> row.split(''));
    const boardLength = 3;
    const isFinish = (shape) => {
        for (let i = 0; i < boardLength; i++) {
            if (boardArr[i].every(row => row === shape)) return true; // 행 검사
            if (boardArr.every(col => col[i] === shape)) return true; // 열 검사
        }
        //대각선 검사
        if(board[0][0] === shape && board[1][1] === shape && board[2][2] == shape) return true
        if(board[0][2] === shape && board[1][1] === shape && board[2][0] == shape) return true
        return false;
    }
    boardArr.forEach((row)=>{
        row.forEach((space)=> {
            if(space === 'X'){
                xNum ++;
            }
            if(space === "O"){
                oNum++;
            }
        })
    })
    
    const diff = Math.abs(oNum - xNum);

    if(diff >= 2 || xNum > oNum) {
        return 0;
    }
    
    if(diff === 0 && isFinish('O')){
        return 0;
    }
    
    if(oNum > xNum && isFinish('X')){
        return 0;
    }
    
    return 1;
}
