//바구니의 크기는 모든 인형이 들어갈만큼 충분히 크다고 가정
function solution(board, moves) {
    let board_size = board.length;
    let stack = []; //바구니의 역할
    let top = 101; //바구니의 탑을 기록 1~100까지가 인형임
    let cur; //현재 뽑은 인형
    let result = 0; //터뜨려서 사라진 인형의 수 
    
    for (let i = 0 ; i < moves.length ; i++){
        let flags = false;
        let column = moves[i] - 1; // 크레인으로 인형을 뽑는 열
        console.log("move", column);
        let j = 0;
        while(flags === false && j < board_size){
                console.log("j", j);
                if(board[j][column] !== 0){ // 인형을 찾으면
                    flags = true;
                    cur = board[j][column];
                    board[j][column] = 0;
                    console.log("cur" , cur);
                    console.log("top", top);
                    if(cur === top) //바구니 맨위의 인형과 같으면
                    {
                        stack.pop(); //stack에서 pop한 후 
                        top = stack[stack.length-1];//top을 갱신시킴
                        result += 2;
                        console.log("top", top);
                        console.log("result" ,result );
                    }
                    else{
                        top = cur; //top을 현재 인형으로 바꾸고
                        stack.push(cur); //stack에 push
                        
                    }
                }
                j++;
        }
        console.log("stack.length" , stack.length);
    } 
    return result;
}