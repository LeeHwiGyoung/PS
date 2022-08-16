function solution(priorities, location) {
    var answer = 0;
    let max = Math.max.apply(null, priorities);
    let print;
    while(1){ 
        if(location == 0 && priorities[0] == max){
            answer++;
            break;
        }     
        else if(location == 0 && priorities[0] != max){
            print = priorities.shift();
            priorities.push(print);
            location = priorities.length;
        }
        else if(location != 0 && priorities[0] == max){
            priorities.shift();
            max = Math.max.apply(null, priorities);
            answer++;            
        }
        else{
             print = priorities.shift();
             priorities.push(print);        
        }
        location --;
    }
    return answer;
}
