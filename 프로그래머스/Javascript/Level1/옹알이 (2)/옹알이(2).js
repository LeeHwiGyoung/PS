function solution(babbling) {
    let answer = 0;
    const pattern = /aya|ye|woo|ma/g
    
    for(let i = 0 ; i < babbling.length ; i++){
        const matches = babbling[i].match(pattern)
        const length = babbling[i].length;
        let matchLength = 0;
        let lastWord = "";
        if(matches === null){// 일치하는게 없으면 다음 단어로
            continue;
        }
        for(let j = 0 ; j < matches.length ; j++){
            if(lastWord === matches[j]){ // 동일 단어
                break;
            }
            lastWord = matches[j];
            matchLength += matches[j].length;
        }
        if(matchLength === length){
            answer++;
        }
    }
    
    
    return answer;
}
