function solution(price, money, count) {
    var answer = 0;
    for (let i = 1 ; i <= count ; i++)
        answer += i * price;
    if(money > answer)
        return 0;
    else
        return answer - money;
    }
