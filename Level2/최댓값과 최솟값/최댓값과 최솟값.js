function solution(s) {
    var answer = '';
    let num = [];
    num = s.split(" ").sort((a,b)=>{
        a = parseInt(a);
        b = parseInt(b);
        if(a > b)
            return 1;
        else 
            return -1;
    });
    
    answer  = num[0] + " "+ num[num.length-1];
    return answer;
}
