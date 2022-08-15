function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let cur_weight = 0;
    let queue = [];
    let next = 0;

    while(truck_weights.length > 0 || queue.length > 0){ //루프 끝나는 조건
        if(queue.length > 0 && queue[0][1] == bridge_length){ //queue가 empty가 아니고 맨 앞의 차량이 다리의 끝에 도달하면
            const [minus_weight , time] = queue.shift(); //현재 무게에서 빼줌
            cur_weight -= minus_weight;
        }
        
        //console.log("before " , next);
        
        if(cur_weight + next <= weight && truck_weights.length > 0){ //현재 다리 위에 있는 차의 무게 + 진입하는 차의 무게가 버틸 수 있는 무게보다 크다면
            next = truck_weights.shift(); //트럭 하나를 진입시키고
            //console.log("after" , next);
            cur_weight += next; //현재 다리가 받는 무게를 더해준다
            queue.push([next, 0]); // 그 후 큐에 push
            next = truck_weights[0]; //다음 진입 차량의 무게로 바꿔준다.
        }
        

        
        for (let i = 0 ; i < queue.length ; i++){
            queue[i][1]  += 1; //1m 이동한것 표시
        }
        answer ++;
      //  console.log("time" , answer , "Queue" , queue , "truck" ,truck_weights );
        
    }
    return answer;
}
