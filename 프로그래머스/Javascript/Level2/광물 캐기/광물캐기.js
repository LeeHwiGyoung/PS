function solution(picks, minerals) {
    var answer = 0;
    let picksNum = 0;
    let fiveMinerals = []; // 5개씩 나눠서 저장할 배열
    
    picks.forEach((el)=> picksNum += el); 
    
    const checkWeight = (arr , picks) => { //곡괭이에 따라 광물 피로도 계산
        let weight = 0;
        switch (picks) { 
            case 0: //다이아 곡괭이
                for(let i = 0 ; i < arr.length ; i++){
                    weight += 1 
                }
                break
            case 1: //철 곡괭이
                for(let i = 0 ; i < arr.length ; i++){
                    if(arr[i] === 'diamond')
                        weight += 5
                    else
                        weight += 1
                }
                break
            default:  //돌 곡괭이
                for(let i = 0 ; i < arr.length ; i++){
                    if(arr[i] === 'diamond')
                        weight += 25
                    else if(arr[i] === 'iron')
                        weight += 5
                    else
                        weight += 1
                }
            }
        return weight
    }
    

    for(let i = 0 ; i < minerals.length / 5 && i < picksNum ; i++){
        fiveMinerals.push([minerals.slice(i*5, (i+1)*5), checkWeight(minerals.slice(i*5, (i+1)*5),2)]) //5개씩 잘라서 돌곡괭이로 캤을 때 피로도로 저장
    }

    fiveMinerals.sort((a,b)=> b[1] - a[1])// 피로도를 기준으로 내림차순 sort
    

    for(let i = 0 ; i < fiveMinerals.length ; i++){
        const mineralsSet = fiveMinerals[i][0]; //피로도를 기준으로 sort된 광물 묶음
        if(picks[0] > 0){ //다이아 곡괭이가 있는 경우 다이아 곡괭이 먼저 사용
            picks[0]--;
            answer += checkWeight(mineralsSet , 0)
        }else if(picks[1] > 0){ //다이아 x 철 o
            picks[1]--;
            answer += checkWeight(mineralsSet, 1)
        }else if(picks[2] > 0) { //다이아x 철 x 스톤 o
            picks[2]--;
            answer += checkWeight(mineralsSet,2)
        }else{ //다이아x 철 x 스톤x 
            break
        }
    }
 
    return answer;
}
