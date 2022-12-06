function solution(x) {
    let quotient = x; //몫
    let sum = 0; //합
    while(quotient >= 10)
    {
        sum += quotient % 10;
        quotient = parseInt(quotient / 10);
    }
    sum += quotient;
    if(x % sum === 0)
        return true;
    else
        return false;
}
