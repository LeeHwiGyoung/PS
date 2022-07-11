//"A" == 65  "Z" == 90 " " == 32 "a == 97  "z" == 122
//let test = "Z";
//console.log(test.charCodeAt(0));

function solution(s, n) {
    var answer = '';
    let ascii = []; //s의 아스키 코드를 저장할 배열
    
    for(let i = 0 ; i < s.length; i++) 
    {
        ascii.push(s.charCodeAt(i)); //아스키 코드로 변환 후 저장
    }
   
    ascii.forEach((el)=>{ //각각의 요소들이
        if(el == 32){ //공백이면 
            answer += " " //공백추가
        }
        else if(65<=el && el<=90){ //대문자면 대문자로만
            el += n;
            if(el > 90)
                answer += String.fromCharCode([64 + el - 90]);
            else
                answer += String.fromCharCode([el]);
        }
        else{ //소문자면 소문자로만 변환
            el += n ;
            if(el > 122)
                answer += String.fromCharCode([96 + el - 122]);
             else
                answer += String.fromCharCode([el]);
        }
    })

    
    return answer;
}
