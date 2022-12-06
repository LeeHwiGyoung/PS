function solution(people, limit) {
    let answer = 0;
    let start = 0;
    let end = people.length - 1;
    people.sort((a,b)=>a-b);
    
    while(start < end){ //start가 end 보다 작을 때 
        if(people[start] + people[end] > limit ){ //리미트를 넘어갈 시 가장 무거운 사람을 출발시킴 
            end--; //end가 구출하지 못한 사람중 가장 무거운 사람을 가리키게 됨
        }
        else{ //아니면은 가장 가벼운 사람과 가장 무거운 사람을 짝지어서 보냄
            end --; //end가 구출하지 못한 사람중 가장 무거운 사람을 가리키게 됨
            start ++; //start 는 구출하지 못한 사람중 가장 가벼운 사람을 가리키게 됨
        }
        answer++; 
    }
    if(start == end) // start와 end가 같으면 1명만 남은 경우
        answer++;
    
    return answer;        
}
