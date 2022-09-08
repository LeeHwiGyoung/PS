function solution(s){
    var answer = true;
    let cnt = 0;
    for(let i = 0 ,len = s.length; i < len ; i++){
        if(s[i] == '('){ //여는 괄호면 
            cnt++;
        }
        else{ //닫는 괄호일 때
            if(cnt == 0) //닫는 괄호가 나왔지만 짝인 여는 괄호가 안 나왔을 때
                return false;
            cnt--; //stack에서 괄호를 pop해줌
        }
    }
    if(cnt != 0) //괄호의 짝이 맞지 않아 여는 괄호가 남아있으면
        return false;
    return answer;
} //통과풀이;

function solution(s){
    var answer = true;
    let stack = [];
    for(let i = 0 ,len = s.length; i < len ; i++){
        if(s[i] == '('){ //여는 괄호면 stack에 저장
            stack.push(s[i]);
        }
        else{ //닫는 괄호일 때
            if(stack.length == 0) //닫는 괄호가 나왔지만 짝인 여는 괄호가 안 나왔을 때
                return false;
            stack.pop(); //stack에서 괄호를 pop해줌
        }
    }
    if(stack.length != 0) //괄호의 짝이 맞지 않아 여는 괄호가 남아있으면
        return false;
    return answer;
} //효율성 실패 풀이
