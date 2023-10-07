/* 내 풀이 
  코드가 너무 복잡하고 마지막 케이스에서 시간이 오래걸려 더 좋은 방법이 있나 블로그를 찾아보았다.
  간단한 풀이 방법이 있는데 너무 돌려 생각한것 같다.
*/
function solution(scores) {
    var answer = 0;
    let out = 0; //완호보다 점수가 높은데 인센티브 탈락한 사람의 수
    const wan_score = scores[0]; //완호의 점수
    const sum_wan = scores[0][0] + scores[0][1]; //완호의 합
    let above = scores.filter(el => el[0] + el[1] > sum_wan); //완호보다 합이 낮은 경우는 완호에게 영향이 없기떄문에 높은 값만 추출
    let above_map = new Map(); //근무 태도 점수를 키값으로 하고 동료평가의 최대값을 value로 갖는 Map  
    
    above.sort((a,b)=> { //근무 태도 점수를 기준으로 내림차순 같은 경우엔 동료 평가로 내림차순
        if(a[0] > b[0])
            return -1
        else if(a[0] === b[0])
            if(a[1] > b[1])
                return -1
            else
                return 1
    })
    
    above.push(wan_score) //sort 후 마지막 값을 완호로 넣어줘 계산을 한 번에 끝내기 위함
    
    above_map.set(above[0][0] , above[0][1]); //초기 셋팅 , 0번 인덱스는 모든 점수에서 최대값
    
    for(let i = 1 ; i < above.length ; i++){
        const [atti, coll] = above[i];
        let out_flag = false; 
        for(let [key , value] of above_map){
            if(key > atti && value > coll){
                if(i === above.length - 1) //완호의 경우
                    return -1 //리턴 -1
                out ++; 
                out_flag = true //탈락한 사람 Map 셋팅을 막기 위함
                break;
            }
        }
        if(out_flag === true) // 탈락한 경우
            continue // map 셋팅 제외
            
        if(!above_map.has(atti)){ //key 값이 없는 경우 
            above_map.set(atti,coll);
        }else{
            const max = above_map.get(atti) 
            coll > max && above.set(atti , coll);
        }
    }

    return above.length - out;
}


 /* 블로그 참조 출처 : https://kk3june.tistory.com/85*/
function solution(scores) {
    const wanho = scores[0];
    // 근무태도점수 내림차순정렬, 근무태도 동점일 경우 동료평가점수 오름차순 정렬
    scores.sort((a,b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);
    let answer = 1;
    let maxScore = 0;
    const wanhoSum = wanho[0] + wanho[1];
    
    for(let score of scores){
        // 내 앞의 동료평가점수가 나보다 높은 사람이 한 사람이라도 있으면 탈락
        // 근무태도 동점자의 경우 동료평가점수 오름차순 정렬 되어있으므로 고려할 필요X
        if(score[1] < maxScore) {
            // 탈락대상
            if(score === wanho) return -1;
        } else {
            // 인센대상
            maxScore = Math.max(maxScore, score[1]);
            if(score[0] + score[1] > wanhoSum){
                answer++;
            }
        }
    }
    return answer;
}
