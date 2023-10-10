function solution(targets) {
    var answer = 0;
    let control = targets.map((el) => {
        let [start , end] = el;
        return [start * 2 + 1 , end * 2 - 1] 
    }).sort((a,b) => a[1] - b[1])
    
    let last = 0;
    for(let i = 0 ; i < control.length ; i++){
        const [start , end] = control[i];
        if(start <= last && last <= end){
           continue 
        }else{
            last = end;
            answer++;
        }
    }
    return answer;
}
