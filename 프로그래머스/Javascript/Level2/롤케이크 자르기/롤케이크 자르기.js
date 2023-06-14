function solution(topping) {
    var answer = 0;
    const map = new Map(); //토핑의 개수를 저장할 map , 동생 토핑 종류
    const cheolsu = new Set(); //철수의  토핑을 저장할  set  철수 토핑 종류
    
    for (let i = 0 ; i < topping.length; i++){
        map.has(topping[i]) ? map.set(topping[i] , map.get(topping[i]) + 1):  map.set(topping[i] , 1)  //map이 토핑을 key로 갖고 있으면  + 1 아니면 초기 설정 1    
    }
    
    for(let i = 0  ; i < topping.length  ; i++){
        const cur = map.get(topping[i]) - 1  ; //동생  토핑에서 빼서
        cheolsu.add(topping[i]); //철수에 추가 
        
        cur === 0  ? map.delete(topping[i]) : map.set(topping[i] , cur  );  //토핑의  개수가 0이 되면 map에서 토핑 key 제거
        
        if(cheolsu.size ===  map.size)  // 토핑 가짓수가 동일하면
            answer ++;
    }

    return answer;
}