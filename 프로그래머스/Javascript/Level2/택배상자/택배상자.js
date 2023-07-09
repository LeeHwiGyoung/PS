function solution(order) {
    var answer = 0;
    let mainBelt = []
    let subBelt = []
    let mainTop  = 1;
    let subTop = 0;
    
    for(let i = 0 ; i <= order.length ;i++){
        mainBelt.push(order.length - i)
    }
    
    for(let i = 0 ; i < order.length ;i++){
        const cur = order[i]
        while(mainBelt.length || subBelt.length){
            if(cur === mainTop){
                answer++
                mainBelt.pop()
                mainTop = mainBelt.at(-1)
                break
            }
            if(mainTop > cur || mainBelt.length == 0){
                if(cur == subTop){
                    answer++
                    subBelt.pop()
                    subTop = subBelt.at(-1)
                    break
                }
                else{
                    return answer
                }
        }
        
        if(cur > mainTop){
            subBelt.push(mainTop)
            subTop = subBelt.at(-1)
            mainBelt.pop()
            mainTop = mainBelt.at(-1)
         }

    }
        
        
        
    }
    
    return answer;
} 