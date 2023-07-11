function solution(cards1, cards2, goal) {
    var answer = 'Yes'
    let card1_stack = cards1.reverse(); //shift 연산의 경우 O(n), pop의 경우 O(1)
    let card2_stack = cards2.reverse();
    
    goal.forEach((item) => {
        if(item === card1_stack.at(-1)){//마지막 인덱스
            card1_stack.pop();
        }
        else if(item === card2_stack.at(-1)){
            card2_stack.pop();
            
        }else{
            answer = "No"
            return 
        }
        
        
    })
    return answer;
}