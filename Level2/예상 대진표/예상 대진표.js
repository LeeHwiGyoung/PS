function solution(n,a,b)
{
    var answer = 0;
    let left , right; //left가 작은 쪽 
    if( a > b){
        left = b ;
        right = a;
    }
    else {
        left = a;
        right = b;
    }
  
    while(1){
        if(left >= right) // 루프 종료조건
            break;
        answer += 1;
        left = Math.ceil(left / 2); //자바스크립트는 기본적으로 정수형이 아닌 실수형이기 때문에 그냥 나누면 실수 
        right = Math.ceil(right / 2);
    }
    return answer;
}
