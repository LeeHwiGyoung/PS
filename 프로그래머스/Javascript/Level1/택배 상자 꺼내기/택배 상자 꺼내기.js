function solution(n, w, num) {
    var answer = 0;
    
    const totalFloor = Math.trunc((n-1) / w);
    const lastFloorLine = (n-1) % w;
    
    const targetFloor = Math.trunc((num -1) / w);
    const targetFloorLine = (num - 1) % w; 
    

    answer = totalFloor - targetFloor;
  
     if ((totalFloor + targetFloor) % 2 === 0) {
        if (lastFloorLine >= targetFloorLine){
             answer++;   
        }
    } else {
        if (lastFloorLine + targetFloorLine >= w - 1){
             answer++;
        }
    }

    return answer;
}
