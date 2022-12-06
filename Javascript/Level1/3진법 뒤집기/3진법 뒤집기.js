/*
45 / 3 = 15 = 0
15 / 3 = 5 = 0
5 / 3 = 2
1
*/

function solution(n) {
    var answer= 0;
    let quotient = n; //몫
    let remainder = []; //나머지
    let len;
    while(quotient >= 3)
    {
        remainder.push(quotient % 3);
        quotient = parseInt(quotient / 3);
    }
    remainder.push(quotient);
    len = remainder.length;
    for(let i = 0; i < len; i++){
        answer = answer + (remainder[i]) * ( 3** (len-1-i));
    }
    return answer;
}
