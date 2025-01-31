//자기자신을 제외한 약수중 가장 큰 값
//블록은 천만이하
function solution(begin, end) {
    const answer = [];
    
    const division = (number) => {
        if(number === 1){
            return 0;
        }
        const sqrt = Math.sqrt(number);
        let max_div = 1;
        for(let i = 2 ; i <= sqrt ; i++){
            if(number % i === 0){ //i가 number의 약수인경우
                max_div = i; //max값 초기화
                if(Math.trunc(number/i) <= 1e7){// 천만 이하인 경우 
                    return Math.trunc(number/i);
                }
            }
        }
        
        return max_div;
    }        
    
    for(let i = begin ; i <= end  ; i++){
        answer.push(division(i))    
    }

    return answer;
}
