function solution(word) {
    var answer = 0;
    const word_list = ['A','E','I','O','U']
    const cur = []; //현재 문자열
    while(word != cur.join("")){ //같아질 떄까지 반복
        if(cur.length < 5){ //길이가 5보다 작으면 
            cur.push('A') //A추가 후
            answer++; //  ++ 
            continue;
        }
        while(cur.at(-1) == 'U'){ //길이가 5이고 마지막 글자가 U이면
            cur.pop(); //U가 아닐때 까지 pop
        }
        cur[cur.length - 1] = word_list[word_list.indexOf(cur.at(-1)) + 1] //마지막 글자를 다음 글자로 변경 후
        answer ++; // ++
    }
    return answer;
}
