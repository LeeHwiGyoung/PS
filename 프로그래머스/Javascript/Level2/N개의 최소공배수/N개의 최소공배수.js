function GCD(a,b){
    let bigger , less ;
    a > b  ? (bigger = a  ,less = b) :  (less = a,  bigger = b);
    
    while(bigger % less != 0){
        let R =  bigger % less;
        bigger = less;
        less = R;
    }
    
    return less;
}

function solution(arr) {
    var answer = arr[0];
    
    
    for(let i = 1 , max = arr.length; i < max ; i++){
        let gcd = GCD(answer, arr[i]);
        let lcm = parseInt(answer * arr[i] / gcd);
        answer = lcm;
    }
    
    return answer;
}
