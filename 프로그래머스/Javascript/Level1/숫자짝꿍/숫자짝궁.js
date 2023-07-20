function solution(X, Y) {
    var answer = '';
    let common  = []; //공통된 수를 저장할 배열
    let mapX = new Map(); //Key를 0-9로 value를 개수로 저장할 맵
    
    for(let i = 0 ; i < X.length ; i++){
        if(!mapX.has(X[i])){ //map에 X[i] 값이 없으면
            mapX.set(X[i] , 1) //초기설정
        }else {
            mapX.set(X[i] , mapX.get(X[i]) + 1) // 있으면 + 1
        }
    }
    
    for(let i = 0 ; i < Y.length ; i++){ 
        if(mapX.has(Y[i]) && mapX.get(Y[i]) > 0){ //겹치면서 개수가 남아있으면 
            common.push(Y[i]); //공통 배열에 저장
            mapX.set(Y[i] , mapX.get(Y[i]) - 1); // 개수 - 1
         
        }
    }
    
    common.length == 0 ? answer = '-1' : answer = common.sort((a,b)=> b-a).join('') //겹치는 숫자가 없으면 -1리턴 있으면 내림차순으로 정렬하여 join 
    if (answer[0] === '0') // 겹치는 수가 0밖에 없을 경우
        return '0'
    return answer;
}
