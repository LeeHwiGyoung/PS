function solution(k, m, score) {
    var answer = 0;
    let cnt = 0;
    score.sort((a,b)=>b-a);
    for(let i = 0 ; i < score.length ; i++){
        cnt ++;
        if(cnt === m){
            answer += score[i] * m
            cnt =  0;
        }
    }
    return answer;
}