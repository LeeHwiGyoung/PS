function solution(msg) {
    var answer = [];
    let dic = {};
    let index = 65;
    for(let i = 1 ; i <= 26 ; i++){
        dic[String.fromCharCode(index)] = i;
        index ++;
    }
    
    index = 27;
    
    for(let i = 0 , max = msg.length ; i < max ; i ++){
        let token = msg[i];
        let j = i;
        let cnt = 0;
        while(token in dic){
            if(msg[j+1] == undefined){
                answer.push(dic[token]);
                return answer;
            }
            token = token +  msg[j+1];
            j++;
            cnt ++;
        }
        answer.push(dic[token.slice(0,  token.length-1)]);
        dic[token] = index;
        index ++;
        i += cnt -1;
    }

    return answer;
}
