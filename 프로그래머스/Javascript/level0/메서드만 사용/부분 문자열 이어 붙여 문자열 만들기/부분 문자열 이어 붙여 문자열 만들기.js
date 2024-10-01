function solution(my_strings, parts) {
    var answer = '';
    my_strings.forEach((el ,idx)=> {
        const part = parts[idx];
        answer += el.substring(part[0] , part[1]+1);
    })
    return answer;
}