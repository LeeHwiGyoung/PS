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
//문제 풀고 다른 사람의 풀이를 봤는데  a , b의 중간값을 구하여 a,b의 차만큼 곱하여 푸는 법을 봤다.
