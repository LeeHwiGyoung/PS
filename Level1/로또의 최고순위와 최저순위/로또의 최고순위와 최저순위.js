function rank(num){
    
    if(num === 6)
        return 1;
    else if(num === 5)
        return 2;
    else if (num === 4)
        return 3;
    else if (num === 3)
        return 4;
     else if (num === 2)
        return 5;
    else 
        return 6;
}

function solution(lottos, win_nums) {
    var answer = [];

    let current_count = 0;
    let zero_count = 0;
    
    lottos.forEach((el)=>{
        if(el === 0)
            zero_count += 1;
        if(win_nums.includes(el))
            current_count += 1;
    })
    answer.push(rank(current_count + zero_count));
    answer.push(rank(current_count));
    
    return answer;
}
