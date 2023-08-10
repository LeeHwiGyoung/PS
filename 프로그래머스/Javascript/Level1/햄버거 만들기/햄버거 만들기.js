function solution(ingredient) {
    var answer = 0;
    let stack  = []
    
    for(let i = 0 ; i < ingredient.length ; i++){
        stack.push(ingredient[i])
        const sLength = stack.length
        if(stack[sLength-4] === 1 && stack[sLength-3] === 2 &&  stack[sLength-2] === 3 && stack[sLength-1] === 1){
            for(let i=0;i<4;i++){
                stack.pop()
            }
            answer++ 
        }
    }
    return answer;
}
