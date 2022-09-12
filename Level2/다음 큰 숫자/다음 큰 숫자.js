function check_one(n){
    let binary = n.toString(2);
    let one_number = 0;
    for (let i = 0 ; i < binary.length ; i++){
        if(binary[i] == 1)
            one_number++;
    }
    return one_number;
}
function solution(n) {
    var answer = n + 1;
    let one_number = check_one(n);
    
    while(check_one(answer) != one_number){
        answer++;
    }
    
    return answer;
}
