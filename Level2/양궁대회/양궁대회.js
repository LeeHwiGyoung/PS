//도전자가 화살을 n 발 쏜 후 우승자가 화살을  n발 쏨
//화살을 맞춘 횟수당 점수가 아니고 많이 맞춘 사람이 점수를 가져감
//쏘거나 안 쏘거니
function solution(n, info) {
    let answer = [new Array(11).fill(0),0];

    check(0,0,new Array(11).fill(0));
    
    if(answer[1] == 0)
        return [-1]
    return answer[0];
    
    function smallIndex(arr) {
        for (let i = 10; i >= 0; i--) {
            if (arr[i] > answer[0][i]) return true;
            else if (arr[i] < answer[0][i]) return false;
        }
    }
    
    
    function check(cnt , idx , ryan){
        if (idx == 10 || cnt == n){ //idx가 끝에 도달하거나 화살을 다 쏜 경우
            if(cnt != n){ // 화살을 다 쏘지 않았지만 idx가 끝에 도달하면 나머지 화살을 0점에 쏨
                ryan[10] += n - cnt;
                cnt = n; // 쏜 화살수를 n으로 변경
            } 
            if(cnt == n){ // 화살을 다 쏜 경우
                let apeachScore = 0;
                let ryanScore = 0;
                for(let i = 0 ; i < 11 ; i++){
                    if(info[i] >= ryan[i]){ //어피치 점수 획득
                        if(info[i] > 0)
                            apeachScore += 10 - i;
                    }
                    else{ //라이언 스코어 획득
                        ryanScore += 10 - i;
                    }
                }
                const diff = ryanScore - apeachScore;
               
                if(answer[1] < diff){
                    answer[0] = ryan;
                    answer[1] = diff;
                }
                else if(answer[1] == diff){
                    if(smallIndex(ryan)){
                        answer[0] = ryan;
                    }
                }
                return;
            }
        }
        if(info[idx] + 1 + cnt <= n){//화살을 쏠 수 있으면 
            ryan[idx] = info[idx] + 1;
            check(cnt + info[idx] + 1 , idx + 1 , [...ryan]);
            ryan[idx] = 0;
        }
        check(cnt, idx + 1 , [...ryan]); //현재 점수 포기
    }
}
