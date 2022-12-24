
function solution(new_id) {
    var answer = "";
    const temp = new_id
        .toLowerCase() //case 1 소문자처리
        .replace(/[^\w\d-_.]/g, "") //case 2 숫자 문자 빼기 밑줄 마침표 제외하고 공백처리
        .replace(/\.+/g, ".") //case3 마침표 1개로 처리
        .replace(/^\.|\.$/g ,  ''); //case4 처음과 끝 마침표 제거
    
    answer = temp;
    let len = answer.length;
    if(len === 0 )//case 5
    {
        answer += "a";     
    }
    if(len > 15) //case6
    {
        answer = answer.slice(0,15);
        if (answer[14] === '.') //자른후에 .이 마지막인 경우
            answer = answer.slice(0,14);
    }

    while(answer.length < 3) //case7
    {
        answer += answer[answer.length - 1];        
    }
    return answer;
    
}
