function solution(str1, str2) {
    var answer = 0;    
    let str1_token = []; //str1을 2개씩 잘라서 저장할 배열
    let str2_token = []; //str2를 2개씩 잘라서 저장할 배열
    let intersection = []; //교집합 저장 배열
    let union = []; //합집합 저장 배열
    
    for(let i = 0 ,max = str1.length - 1  ; i < max ; i++){ 
        if(verify(str1[i]) && verify(str1[i+1])){ //알파벳이면
            str1_token.push((str1[i] + str1[i+1]).toUpperCase()) //2글자로 잘라서 대문자로 변환후 저장
         }
    }
    
    for(let i = 0 , max = str2.length - 1; i < max ; i++){
        if(verify(str2[i]) && verify(str2[i+1])){ //str1과 동일
            str2_token.push((str2[i] + str2[i+1]).toUpperCase())
         }
    }
    
    if(str2_token.length == 0 && str1_token.length == 0) //A 집합과 B집합 즉 str1을 기준에 맞게 자르고 str2를 기준에 맞게 잘랐을 때 두 집합 다 공집합이면 
        return 65536;
    
    let str1_element = new Array(str1_token.length).fill(false); // 중복을 허용하며 교집합에 저장하기 위해 선언
    let str2_element = new Array(str2_token.length).fill(false); 
    
    for(let i = 0 , str1_len = str1_token.length ; i < str1_len ; i++){ //str1을 가르킬 포인터 
        for(let j = 0 , str2_len = str2_token.length  ; j < str2_len; j++){ //str2를 가르킬 포인터
            if(str1_token[i] == str2_token[j] && str2_element[j] == false && str1_element[i] == false){ //str1토큰과 str2 토큰이 같고 str1_token , str2_token이 아직 교집합에 포함 시키지 않았을 때
                str1_element[i] = true; // 교집합에 추가했음을 뜻하게 true
                str2_element[j] = true; // 동일
                intersection.push(str2_token[j]); 
            }
        }
    }
    
    union = intersection.slice(); // 교집합은 합집합의 부분집합이므로 교집합을 복사하여 저장
    
    str1_element.forEach((el,idx)=>{ // 교집합이 아닌 부분  A - A^B 인 부분을 합칩합에 저장 즉 str1_token - str1_token^str2_token
        if(el == false){
            union.push(str1_token[idx]);
        }
    })
    str2_element.forEach((el,idx)=>{  // 교집합이 아닌 부분  B - A^B 인 부분을 합칩합에 저장 str2_token - str1_token^str2_token
        if(el == false){
            union.push(str2_token[idx]);
        }
    })
    
    answer =  parseInt(intersection.length / union.length * 65536); //소수점 아래를 버리기 위해
    return answer;
}

function verify(str){
    if( ('a' <= str && str <= 'z') ||   ('A' <= str && str <= 'Z') )
        return true;
    else
        return false;
} 
