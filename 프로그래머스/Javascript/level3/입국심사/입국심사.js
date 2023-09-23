/* 
 high를 심사시간이 가장 오래걸리는 값으로 설정후에 이분탐색
*/
function solution(n, times) {
    var answer = 0;
    let low = 1;
    let high = Math.max(...times)*n;
    
    while(low <= high){
        let checkNum = 0;
        const mid = parseInt((low + high) / 2);
        times.forEach((time)=> {
            checkNum += parseInt(mid / time); 
        })
 
        if(checkNum < n){
            low =  mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return low;
}
