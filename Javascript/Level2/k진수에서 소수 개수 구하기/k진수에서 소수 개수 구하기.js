function isPrime(num){
    if(num <= 1 )
        return false;
    if(num % 2 == 0) 
        return num ==2 ? true : false;

	// n이 홀수인 경우 sqrt(n)까지 나눠서 나눠떨어지는지 여부 체크
    for(let i=3; i<= Math.sqrt(num); i += 2) { 
        if( num % i == 0)
            return false;
    }
	return true; 
}

function solution(n, k) {
    var answer = 0;
    let change = [];
    let num = "";
    
    while(n > 0){
        change.push(n % k)
        n = parseInt(n/k);
    }
    
    for(let i = change.length - 1 ; i > -1 ; i--){
        if(change[i] == 0){
            if(isPrime(num))
                answer++;
            num = "";
        }
        else{
            num += change[i];
        }
      
    }
    
    if(num != "")
        if(isPrime(num))
            answer++;
    
    return answer;
}
