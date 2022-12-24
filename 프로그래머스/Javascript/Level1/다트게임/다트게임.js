function solution(dartResult) {
    let answer = 0;
    let digit = new Array(3).fill("");
    let str  = new Array(3).fill("");
    let score = [];
    let cnt = -1;
    
    for(let i = 0 ; i < dartResult.length ; i++){ //digit과 문자로 나눠서 저장
        if(dartResult[i] ===  '1'){
            cnt +=1 ;
            if(dartResult[i+1] === '0'){
                 digit[cnt] = 10;
                 i += 1;
                 continue;
             }
            digit[cnt] += parseInt(dartResult[i]);
        }
        else if(dartResult[i] === '0' || '2'<= dartResult[i] && dartResult[i] <= '9'){
            cnt += 1;
            digit[cnt] += dartResult[i];
        }
        else{
            str[cnt] += dartResult[i];
        }
    }
    
    str.forEach((el,idx)=>{ //계산
        if(el.length === 2){ //옵션이 있을 때
            if(el[1] === "*"){ // 앞의 인덱스와 현재 인덱스 * 2;
                if(el[0] === "S"){
                    score[idx] =  parseInt(digit[idx]) * 2;
                }
                else if(el[0] ==="D"){
                    score[idx] = parseInt(digit[idx])**2 * 2 ;
                }
                else{
                    score[idx] = parseInt(digit[idx])**3 * 2;
                }
                if(idx !== 0)
                    score[idx - 1] *= 2;
            }
            else{ //야차상
                if(el[0] === "S"){
                    score[idx] =  parseInt(digit[idx]) * -1;
                }
                else if(el[0] ==="D"){
                    score[idx] = parseInt(digit[idx])**2 * -1 ;
                }
                else{
                    score[idx] = parseInt(digit[idx])**3 * -1;
                }
            }
        }
        else{ //옵션이 없을 때 
            if(el === "S"){
                score[idx] = parseInt(digit[idx]);
            }
            else if(el ==="D"){
                score[idx] = parseInt(digit[idx])**2;
            }
            else{
                score[idx] = parseInt(digit[idx])**3;
            }
        }
    })
    
    for(let i = 0 ; i < 3; i++)
        answer += score[i];
    
    return answer;
}
