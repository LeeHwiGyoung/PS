function solution(elements) {
    var answer = 0;
    const len = elements.length; //주어진 배열의 길이
    const set = new Set(); // 중복을 제거하기 위한 set
    
    for(let i = 1 ; i <= len ; i++){ //부분 수열의 길이        
        for(let j = 0 ; j < len ; j++){ //부분 수열의 시작 점
            if(i + j > len){ //수열의 마지막 인덱스에 도달하였으나 부분 수열의 길이를 못 채운 경우
                const remain = j + i - len; //원형 수열과 동일하게 하기 위해 slice할 범위를 구함
                const sum = elements.slice(j,len).reduce((a,b) => a+b , 0)
                          + elements.slice(0,remain).reduce((a,b)=>a+b , 0); //넘친 부분 slice
                set.add(sum);
            }
            else{
                set.add(elements.slice(j,j+i).reduce((a,b)=>a+b,0))
            }
            
        }
    }
    answer = set.size
    return answer;
}