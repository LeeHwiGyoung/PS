
function solution(arr) {
    var answer = [0 , 0]; // answer[0] = # of 0 answer[1] = # of 1
 
    const quard = (x, y , len) => { 
        const initValue = arr[x][y];
        if(len === 1){
            answer[initValue] ++;
            return
        }
        
        let flag = true
        for(let i = x; i < x + len ; i++){
            for(let j = y ; j < y + len ; j++){
                if(initValue !== arr[i][j]){
                    flag = false;
                    break;
                }
            }
        }
        if(flag === true){
            answer[initValue]++;
            return
        } 
        quard(x, y , len / 2)
        quard(x + len / 2 , y , len / 2)
        quard(x , y + len / 2 , len /2)
        quard(x+len / 2, y + len / 2 , len / 2)
    }

    quard(0 , 0 , arr.length)
    return answer;
}
