function solution(s) {
    var answer = '';
    let len = s.length;
    if(len % 2 === 0){
        answer += s[len/2 - 1] + s[len/2];
    }
    else{
        answer += s[Math.floor(len/2)];
    }
    return answer;
}
