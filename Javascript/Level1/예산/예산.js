function solution(d, budget) {
    var answer = 0;
    d.sort((a,b)=>a-b);
    d.forEach((el)=>{
        if(budget >= el){
            answer += 1;
            budget -= el;
        }
    })
    return answer;
}
