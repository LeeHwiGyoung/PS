function solution(s) {
    var answer = 0;
    let standard = ""; //기준 문자열
    let other_cnt = 0; //기준 문자열과 다른 문자열의 개수
    let standard_cnt = 0;
    
    for(let i = 0 ; i < s.length; i++){
        if(standard === ""){ //기준 문자열 선택
            standard = s[i];
        }
        standard === s[i] ? standard_cnt += 1 : other_cnt += 1 // 기준문자열과 현재 가리키는 문자열 비교
        if(standard_cnt === other_cnt){ 
            answer += 1;
            standard_cnt = 0;
            other_cnt = 0;
            standard = "";
        }  
    }
    if(other_cnt || standard_cnt){ //둘 다 0이 아니면 즉 남은 문자열 존재
        answer += 1
    }
    return answer;
}
