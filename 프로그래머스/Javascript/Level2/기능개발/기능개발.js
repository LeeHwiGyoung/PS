function solution(progresses, speeds) {
    var answer = [];
    progresses.reverse(); //pop을 사용하기 위해서 
    speeds.reverse();
    
    while(progresses.length > 0){ //while 문 1번당 1일이 지났다고 판단
        let cnt = 0;
        progresses.map((el,idx)=>{
            progresses[idx] = el + speeds[idx];  // 1일간 진행률 +
        });
        while(progresses[progresses.length-1]>= 100){  // 1일이  끝날 때 가장 첫 작업이 끝났고 이미 끝난 작업이 존재하는지까지 판단하기 위해 while문
            cnt += 1; //카운트 + 
            progresses.pop();
        }
        if(cnt > 0)
            answer.push(cnt); 
    };  
    return answer;
}
