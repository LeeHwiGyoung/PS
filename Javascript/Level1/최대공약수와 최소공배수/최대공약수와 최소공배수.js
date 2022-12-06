function solution(n, m) {
    var answer = [];
    let a, b, c;
    a = n ;
    b = m;
    while(b !== 0)
    {
        c = a % b;
        a = b;
        b = c;
    }
    
    answer.push(a); //최대공약수
    answer.push(n * m / a); //최소공배수
    
    
    
    return answer;
}
