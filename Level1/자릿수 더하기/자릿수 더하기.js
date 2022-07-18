function solution(n)
{
    var answer = 0;
    n = n.toString();
    for(let i = 0 ; i < n.length ; i++)
    {
        let str = n.slice(i,i+1); 
        answer += parseInt(str);
    }
    return answer;
}
