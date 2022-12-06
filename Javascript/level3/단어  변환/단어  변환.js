function solution(begin, target, words) {
    function checkdiff(word1, word2){ //1글자차이나는가?
        let diff = 0;
        for(let i = 0 ; i < word1.length ; i++){
            if(word1[i] !== word2[i])
                diff++;
            if(diff > 1)
                return false;
        }
        if(diff == 1)
            return true;
        else return false;
    }
    
    var answer = words.length;
    let queue = [];
    let visit = new Array(words.length).fill(false);
    if (!words.includes(target)) // target이 words 안에 없으면 못 만듬
        return 0;
    
    
    for(let i= 0; i < words.length ; i++) //큐 기본셋팅
    {
        if(checkdiff(words[i] , begin)){
            visit[i] = true;
            queue.push([words[i], 1, [...visit]]);
        }
    }
    
    while(queue.length != 0){
        let [str , cnt , cur_visit] = queue.shift(); //visit방문은 dot -> hot -> dot -> hot 같은 중복방문을없애고 무한루프에  빠지지 않게 하기 위해서
        if(str === target) //탈출조건 cnt가 낮은 순서부터 하나씩 다 비교하기 때문에 처음 일치하는 경우가 최소
            return cnt;
        
        for(let i = 0 ; i < words.length ; i++){ //전체 범위에서 재탐색 하는 이유는 idx를 하나씩 늘려가며 탐색할 경우 words 의 배치에 따라서 값이 다르게 나올 수 있음 
            if(checkdiff(words[i] , str) && cur_visit[i] == false){ //현재와 1글자 차이 나고 아직 방문한 적이 없으면
                cur_visit[i] =  true; // true로 바꾸고
                queue.push([words[i], cnt + 1, [...cur_visit]]); //queue 에 넣음
                cur_visit[i] = false;  // 다시 flase 로 바꿈
            }
        }
    }
}
