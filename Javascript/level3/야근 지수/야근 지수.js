/*
    최대값이 클 수록 제곱값이 급수적으로 커짐
    최대한 고르게 만들어 줘야 제곱 값이 작아짐
*/
function solution(n, works) { 
    var answer = 0;    
    let cnt = 0; // 근무 시간

    works.sort((a,b)=>b-a); //내림차순 정렬
    
    while (cnt < n) { //현재 근무 시간이 총 근무 시간보다 작으면
        const max = works[0]; //항상 works[0]가 max 값이 되게 함
        if(max == 0) //max == 0 이면 더 이상 근무할 게 남아있지 않음
            break;
        for(let i = 0 ; i < works.length ; i++){ //최대값들을 하나씩 빼주기 위헤서
            if(cnt == n) //근무 시간이 다 지나면 
                break; //포문 탈출
            if(works[i] >= max){ //최대값이면    
                works[i] -= 1; //한시간씩 일을 함
                cnt += 1; //일한 시간 ++ 
            }
            else{ //최대값이 아니면
                break;  //포문 탈출
            }
        }
    }
        
    
    works.forEach(e=>{ //works를 순회하며
        answer+= e**2; // 제곱계산
    }) 
    
    return answer;
}
