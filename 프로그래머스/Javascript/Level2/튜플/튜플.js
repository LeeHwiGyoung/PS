function solution(s) {
    var answer = [];
    let str_arr = s.replace("{{", "").replace("}}", "").split("},{");
    let arr = [];
    
    str_arr.forEach((el)=>{
       arr.push(el.split(","));
    })
    
    arr.sort((a,b)=>{
        if(a.length < b.length)
            return -1;
        else
            return 1;
    });

    answer.push(Number(arr[0]));
    
    arr.forEach((el)=>{
        for(let i = 0 ; i < el.length ;i++){
            if(!answer.includes(Number(el[i]))){
                answer.push(Number(el[i]));
            }
        }
    })
   
    return answer;
}
