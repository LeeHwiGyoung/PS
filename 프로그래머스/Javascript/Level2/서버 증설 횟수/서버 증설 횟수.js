//m = 서버당 감당 가능한 플레이어 k= 서버 대여 시간
function solution(players, m, k) { 
    let rentServerCnt = 0;
    
    const server = new Map(); // 서버의 시간을 저장 Map의 삭제 연산은 O(1)임을 이용    

    const getAbledServer = (currentTime) => {
        let serverNum = 0
        const toDelete = [];

        for(const [rentServerTime, rentServerCnt] of server.entries()){
            if(rentServerTime <= currentTime - k){
                toDelete.push(rentServerTime);
                
            }else{
                serverNum += rentServerCnt   
            }
        }
        toDelete.forEach(time => server.delete(time));
        return serverNum
    }
    
    const rentServer = (currentTime , requireServerNum) => {
         server.set(currentTime, requireServerNum);
    }
    
    const checkRequireServer = (player ,currentTime) => {
        if(player < m){ //원래의 서버에서 감당이 가능하다면
            return
        }    
   
        
        const abledServerNum = getAbledServer(currentTime) + 1 //이용 가능한 서버 개수
        const needServerNum = Math.trunc(player / m) + 1;
        
        
        if(needServerNum > abledServerNum){ //서버를 추가로 빌려야 한다면 player 20 server 3 abled 12
            const newRentServerNum =needServerNum - abledServerNum 
            rentServer(currentTime, newRentServerNum);
            rentServerCnt += newRentServerNum
        } 
        
    }
    
    players.forEach((playerNum, hour) => {
        checkRequireServer(playerNum , hour);
    })
    
    
    return rentServerCnt;
}
