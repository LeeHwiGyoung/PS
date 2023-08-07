function solution(cap, n, deliveries, pickups) { 
    //cap : 수용 개수 n: 집 deliveries  : 배달 pickups : 수거 
    var answer = 0;
    let dStack = Array.from(deliveries, (el , idx)=> [el , idx + 1]);
    let pStack = Array.from(pickups, (el, idx) => [el, idx + 1]);
    let distance = 0; //출발할 때 제일 멀리 떨어진 집
    
    const checkDeliver = (cur , cap) => {
        let dDistance = 0;
        while(cur < cap && dStack.length > 0){ //수용량 최대한으로 배달 후 최대 거리 리턴
            const [deliver , house] = dStack.pop();
            if(deliver != 0 && house > dDistance){ //배송할 갯수가 0인 경우
                dDistance = house;
            }
            cur += deliver;
            if(cur > cap){ //넘치는 경우 다시 배달 스택에 추가
                dStack.push([cur - cap , house])
            }
        }
        return dDistance;
    }
    
    const checkPickUp = (cur, cap) => { //수용이 가능한 만큼 수거 후 최대 거리 리턴
        let pDistance = 0;
        while(cur < cap && pStack.length > 0){ //수용량 최대로
            const [pickup , house] = pStack.pop();
            if(pickup != 0 && house > pDistance){ //수거할 것이 없으면 
                pDistance = house
            }
            cur += pickup;
            if(cur > cap){ //수거가 남은 것은 스택에 추가
                pStack.push([cur - cap , house])
            }
        }
        return pDistance;
    }
    
    while(dStack.length != 0 || pStack.length != 0){
        distance = 0;
        distance = Math.max(checkDeliver(0, cap) , checkPickUp(0, cap));
        answer += distance * 2;
       
    }
    
    return answer;
}
