function solution(s) {
    var answer = '';
    let idx = 0; //공백을 기준으로 인덱스가 홀수인지 짝수인지 구별하기 위해서
    for (let i = 0 ; i < s.length ; i++)
        {
            if(s[i] === " "){ //공백이 나오면
                idx = 0  //idx를 초기화
                answer += s[i];
            }
            else{
                if(idx % 2 === 0) //단어를 기준으로 짝수번째 문자이면
                {
                   answer +=  s[i].toUpperCase(); //대문자로 저장
                }
                else // 홀수이면
                {
                   answer += s[i].toLowerCase(); //소문자로 저장
                }
                 idx++; 
            }
        }
    return answer;
}
