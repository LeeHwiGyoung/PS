function solution(expression) {
    let answer = 0;
    const numbers = expression.split(/\+|\*|\-/).map((el)=> Number(el))
    const operators = expression.split(/[0-9]+/).filter(Boolean);
    const uniqueOperators = [...new Set(operators)];
    const usedOperators = Array.from(operators).fill(false);
    
     const calculateWithOperator = (operator, num1, num2) => {
        if (operator === "+") return num1 + num2;
        if (operator === "-") return num1 - num2;
        if (operator === "*") return num1 * num2;
    };
    
    
    
    const evaluateExpression = (targetOperator , nums, ops) => {
        while(ops.includes(targetOperator)){
            const idx = ops.findIndex((item) => targetOperator === item);
            ops.splice(idx , 1);
            const result = calculateWithOperator(targetOperator, nums[idx], nums[idx+1])
            nums.splice(idx , 2 , result)
        }
    }
    
    const calculateWithPriority = (operatorPriority) => {
        const nums = [...numbers];
        const ops = [...operators];
        const priority = [...operatorPriority]
        while(priority.length > 0){
            const currentOperator  = priority.pop();
            evaluateExpression(currentOperator  , nums , ops);
        }
        answer = Math.max(answer , Math.abs(nums[0]))
    }
    
    const generateOperatorPermutations  = (cur) => {
        if(cur.length === uniqueOperators.length){
            calculateWithPriority(cur)
            return
        }
        for(let i = 0 ; i < uniqueOperators.length ; i++){
            if(usedOperators[i]){
                continue;   
            }
                cur.push(uniqueOperators[i]);
                usedOperators[i] = true;
                generateOperatorPermutations(cur);
                cur.pop(uniqueOperators[i]);
                usedOperators[i] = false;
            }
        }
    
    generateOperatorPermutations([])
    return answer;
}
