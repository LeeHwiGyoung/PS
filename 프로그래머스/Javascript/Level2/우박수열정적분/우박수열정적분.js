function solution(k, ranges) {
    let answer = [];
    const sequence = [];
    const intergral = [];
  
    const isEven = (number) => { 
        if(number % 2 === 1) {
            return false
        }
        return true;
    }
    
    const getSequence = (number) => {
        sequence.push(number); 
        if(number <= 1){
            return
        }
        isEven(number) ? getSequence(number / 2) : getSequence(number * 3 + 1)  
    }
    
    const getGradient = (y1, y2) => {
        return y2-y1;
    }
    
    const getYIntercept = (gradient, xMove , y) => {
        return  y - gradient*xMove 
    }
    
    const getIntergral = (sequence) => {
        const copy = [...sequence];
        const len = copy.length - 1;
        for(let i = 0  ; i < len; i++){
            const [y1, y2] = [copy[i], copy[i+1]] //x의 증가량은 1
            const gradient = getGradient(y1,y2); //
            const yIntercept = getYIntercept(gradient , i , y1); 
            intergral.push(gradient / 2 + gradient*i + yIntercept)
        }
    }
    getSequence(k);
    getIntergral(sequence)
   
    ranges.forEach((range)=> {
        const [a, b] = range;
        const maxLange = intergral.length;
        if(a - b > maxLange){
            answer.push(-1)
        }else{
            let sum = 0;
            for(let i = a  ; i < maxLange + b; i++){
                sum += intergral[i];
            }
            answer.push(sum);    
        }
    })
    
    
    return answer;
}
