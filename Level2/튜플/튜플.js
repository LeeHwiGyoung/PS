function solution(s) {
    var answer = [];
    let str_arr = s.replace("{{", "").replace("}}", "").split("},{");
    let arr = [];
    
    str_arr.forEach((el,idx)=>{
       arr.push(el.split(","));
    })
    
    arr.sort((a,b)=>{
        if(a.length < b.length)
            return -1;
        else
            return 1;
    });

    
   
    arr.filter((el,idx)=>{
        for(let i = 0 ; i <= el[idx].length ; i++){
            if(!answer.includes(el[idx][i])){
                answer.push(Number(el[idx][i]));
                return 1;
            }
            else
                return -1;
        }
    })
    
 //마지막 다시하기
  
    
    

    return answer;
}
