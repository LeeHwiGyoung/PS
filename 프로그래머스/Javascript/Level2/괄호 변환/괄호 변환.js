function solution(p) {
    var answer = '';

    const isValidParentheses = (parentheses) => {
        const stack = [];
        for(let i = 0 ;  i < parentheses.length ; i++){
            if(parentheses[i] === '('){
                stack.push(parentheses[i]);
            }else if(parentheses[i] === ')' && stack.length > 0){
                stack.pop();
            }else{
                return false;
            }
        }
        return true;
    }
    
    
    const divideParentheses = (parentheses) => {
        let open = 0;
        let close = 0;
        let idx = 0;
        for(idx = 0 ; idx <  parentheses.length ; idx++){
            if(open > 0 && close > 0 && open === close ){
                break;
            }
            if(parentheses[idx] === '('){
                open += 1;
            }else{
                close+=1;
            }
        }
        return [parentheses.slice(0,idx) , parentheses.slice(idx,)]
    }
    
    const reverseParentheses = (parentheses) => {
        const parenthesesArr = parentheses.split("");
        parenthesesArr.shift();
        parenthesesArr.pop();
        const newParenthesesArr = parenthesesArr.map((char)=>{
            if(char === "("){
                return ')'
            }else{
                return '('
            }
        }).join('');
        return newParenthesesArr;
    }
    
    
    const correctParentheses = (parentheses) => {
        if(isValidParentheses(parentheses)){
            return parentheses;
        }
        
        const [u , v] = divideParentheses(parentheses);
        
        if(isValidParentheses(u)){
            const result = correctParentheses(v) // 재귀 호출
            return u+result; 
        }
        let newParentheses = "("
        newParentheses += correctParentheses(v);
        newParentheses += ")"
        newParentheses += reverseParentheses(u);
        return newParentheses;
        
    }
    
    if(isValidParentheses(p)){
        return p
    }
    
    answer = correctParentheses(p)
    

    return answer;
}
