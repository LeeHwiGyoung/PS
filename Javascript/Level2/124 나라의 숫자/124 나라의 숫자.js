function solution(n) {

    var answer= "";
    let quotient = n; //몫
    let remainder = [4 , 1,  2]; //나머지
    while(quotient > 0)
    {
        answer = remainder[quotient % 3] + answer;
        if(quotient % 3 === 0)
             quotient = Math.floor((quotient)/3) - 1; //아래주석참고
        else
            quotient = Math.floor((quotient)/3);
    }    
    return answer;
}
/*
  3개의 수를 이용하기 때문에 3진법을 떠올려 사용하였다.
  근데 3으로 나눠지는 경우마다 몫이 1 올라가고 나머지가 0이 되면서
  while 문을 한 번 더 돌게 되어 다른 값이 나오기 때문
*/
