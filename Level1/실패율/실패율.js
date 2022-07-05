//실패율 :스테이지에 도달했으나 클리어 하지 못한 플레이어의  수 / 도달한 플레이어의 수

function solution(N, stages) {
    var answer = [];
    let fail = Array(N+1).fill(0); //  실패
    let clear_num = 0;
    
    stages.forEach((el)=>{ //스테이지에 있는 사람
        fail[el-1] += 1; 
    });
  
    for (let i = N ; i >= 0 ; i-- )
    {
        clear_num += fail[i];
        fail[i + 1] = [i+1,fail[i] / clear_num]; //실패율 계산
    }
    
    fail = fail.slice(1, N+1); 
    
    fail.sort((a,b)=>{
        if ( a[0] === b[0])
            return a[0] - b[0];
        else
            return b[1] - a[1];
    }); //실패율로 내림차순 정렬하고 실패율이 동일할 땐 스테이지레벨 오름차순
    
    fail.forEach((el) => { // 스테이지 레벨 푸시
        const stage = el[0];
        answer.push(stage);
    })
    
    return answer;
}
