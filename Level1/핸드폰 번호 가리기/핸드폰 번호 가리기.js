function solution(phone_number) {
    var answer = '';
    let len = phone_number.length;

    for(let i = 0 ; i < len - 4 ;i++ )
        answer += "*";
    answer += phone_number.slice(len - 4,len);
    return answer;
}
