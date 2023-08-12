function solution(users, emoticons) {
    var answer = [0 , 0];
    const discount = [10, 20, 30, 40];
    const userCost = Array.from({length : users.length} ,()=> 0); 
    
    const getCost = (cost , ratio) => {
        return cost - (cost * ratio) / 100;
    }
    
    const dfs = (start) => { //start가 emoticons의 idx가 됨
        if(start === emoticons.length){ //각각의 할인율을 이모티콘에 적용했을 때
            let signUp = 0;
            let cost = 0;
            for(let i = 0 ; i < users.length; i++){
                if(userCost[i] >= users[i][1]){ //기준에 따라 이모티콘을 다 구매했을 때 비용이 쓰고자 하는 비용보다 크면
                    signUp ++; //임티플러스 가입
                }else{ //아니면
                    cost += userCost[i]; //이모티콘을 구매 
                }
            }
            //임티 플러스 구독이 많거나 임티 플러스 구독이 같은데 이모티콘 판매비용이 더 크면
            if(signUp > answer[0] || signUp == answer[0] && cost > answer[1]){ 
                answer = [signUp , cost];
            }
            return
        }
        
        for(let i = 0 ; i < 4 ; i++){ 
            const ratio = discount[i]; //할인율 설정
            for(let j = 0 ; j < users.length ; j++){
                if(ratio >= users[j][0]){ 
                    userCost[j] +=  getCost(emoticons[start], ratio); 
                }
            }
            
            dfs(start+1);
            
            for(let j = 0 ; j < users.length ; j++){
                if(ratio >= users[j][0]){
                    userCost[j] -=  getCost(emoticons[start], ratio);
                }
            }
        }
    }
    
    dfs(0)
    
    return answer;
}
