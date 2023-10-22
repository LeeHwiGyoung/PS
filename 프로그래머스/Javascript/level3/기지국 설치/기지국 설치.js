
function solution(n, stations, w) {
    var answer = 0;
    let current = 0;
    const distance = 2 * w + 1;
    for(let i = 0 ; i < stations.length ; i++){
        const gap = stations[i] -  w - current - 1;
        current = stations[i] + w;
        if(gap > 0) {
            answer += Math.ceil(gap /distance);
        }
    }
    
    if(current < n){
        answer += Math.ceil((n - current) / distance)
    }

    return answer;
}
