function solution(s) {
    var answer = [ 0 , 0]; //answer[0] = 이진변환 횟수 answer[1] = 0이 사라진 개수
    let str = s;
    while(str != '1'){ //str이 1이 될 때까지
        for(let i = 0 , len = str.length ; i < len  ; i++){ // 0제거  
            if(str[i] == '0') //0이면
            {
                str = str.slice(0,i) + str.slice(i+1 , len); //0인 부분만 뺌
                answer[1] += 1;  
                i -= 1; //index 조정
            }
        }
        str = str.length.toString(2); //길이를 2진수로 표현
        answer[0] += 1;
    }

    return answer;
}
