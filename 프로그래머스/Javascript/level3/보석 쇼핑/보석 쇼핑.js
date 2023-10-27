/*
    1. 모든 보석을 살 때 까지 구매
    2. 시작 부분을 줄일 수 있는 만큼 줄인 후 answer에 저장
    3. 못 줄이는 경우 다음 보석을 추가하고 더 작은게 있는지 확인
*/
function solution(gems) {
    var answer = [];
    let jewel = new Set(); // 보석의 종류 저장
    let buy = new Map(); // 구매한 보석 저장
    let start = 0;
    let length = gems.length; //최소 길이를 저장하기 위해서 
    
    gems.forEach((el)=> {
        !jewel.has(el)&&jewel.add(el)
    }) 
          
    for(let i = 0 ; i < gems.length ; i++){
        const gem = gems[i];
        if(!buy.has(gem)){ //보석 구매
            buy.set(gem , 1)
        }else{
            buy.set(gem, buy.get(gem) + 1)
        }
        while(buy.size === jewel.size){ //모든 종류의 보석을 구매했을 때
            const first = gems[start]; //중복 되는 것을 제거해 구간을 줄임
            if(buy.get(first) > 1){ //중복이 있는 경우 
                buy.set(first, buy.get(first) - 1) // 구매하지 않은 것으로 변경
                start++;//시작부분을 늘려 구간을 줄인다
                continue;
            }else{//현재 보석을 제거하는 경우 모든 보석을 구매한게 아닌것이 되는 경우
                if(length > i - start){ //최소 길이이면
                    answer = [start + 1, i + 1] //구간 저장
                    length = i - start; //구간의 길이 저장
                }
                buy.delete(first)//RDDESR의 경우 DESR 탐색을 위해 판매한 것으로 가정 
                start++; 
            }
        }
    }
    return answer;
}
