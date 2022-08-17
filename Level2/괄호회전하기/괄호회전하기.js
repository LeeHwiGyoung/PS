function solution(s) {
    let answer = 0;
    for(let location = 0; location < s.length ; location ++){
        let stack = [];
        for(let i = 0 ;i < s.length; i++){
            //console.log("s[i]",s[i] , "stack", stack , "i" , i);
            if(s[i] == '{' || s[i] == '[' || s[i] == '('){
                stack.push(s[i]);    
            }
            else{
                const token = stack.pop();
               // console.log("token", token);
                if(s[i] == '}'){
                    if(token != '{'){
                        break;
                    }
                }
                else if(s[i] == ']'){
                    if(token != '['){
                        break;
                    }
                }
                else{
                    if(token != '('){
                        break;
                    }
                }
            }
            if(stack.length === 0 && i == s.length - 1){
                answer+=1;
            }
        }
        const push_token = s[0];
        s = s.slice(1,s.length);
        s += push_token;
    }
    
    return answer;
}
