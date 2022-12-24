function solution(n) //현재 위치 +  1 = 건전지 + 1, 현재위치 * 2. = 그대로
{
    var ans = 0;
    while(n  > 0){
        if(n % 2 == 0){
            n = n / 2;
        }
        else{
            n = n - 1;
            ans ++;
        }
    }
    
    
    return ans;
}
