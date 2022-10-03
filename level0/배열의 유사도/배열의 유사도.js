function solution(s1, s2) {
    var answer = 0;
    for(let i = 0,s1_len = s1.length ;i < s1_len ; i++){
        for(let j = 0 , s2_len  = s2.length ; j < s2_len ; j++){
            if(s1[i] == s2[j]){
                answer++;
                break;
            }
        }
    }
    return answer;
}
