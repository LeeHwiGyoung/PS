function solution(a, b) {
    var answer = 0;
    if (a > b){
        let c; 
        c = a;
        a = b;
        b = c;
    }
    for(let i = a; i <= b ; i++)
    {
        answer += i;
    }
    return answer;
}
