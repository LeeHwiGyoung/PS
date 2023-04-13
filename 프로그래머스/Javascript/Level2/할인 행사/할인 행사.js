function solution(want, number, discount) {
    var answer = 0;
    
    const check = (array) => { //길이가 10인 할인 품목 배열을 넘겨 받음
        let buyMap = new Map(); 
        
        want.forEach((el)=> {
            buyMap.set(el,0)    //초기 설정:사야하는 품목을 key로 설정하고 value 를 0으로 설정
        })
        
        array.forEach((el)=> { 
            if(buyMap.has(el)){ // 10개의 el 중 Map이 key로 el을 갖고 있으면
                buyMap.set(el , buyMap.get(el) + 1) //일치하는 key의 value를 올려준다.      
            }
        })
        
        for(let i = 0 ; i < want.length ; i++){ 
            if(buyMap.get(want[i]) !== number[i]){ //구매 개수가 일치하지 않으면 
                return false;
            }
                
        }
        
        return true;
    }
    
    for (let i = 0 ; i + 10 <= discount.length ; i++){
        if(check(discount.slice(i,i+10))){
            answer++;
        }
    }
    
    return answer;
}
