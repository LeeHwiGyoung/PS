function solution(n, words) {
    var answer = [];
    let set = new Set();
    let last , start;

    for(let i = 0 ; i < words.length ; i++)
    {
        start = words[i].slice(0,1);
        console.log(start , last);
        if(set.has(words[i]) || last != start){
            if(i == 0){
                set.add(words[i]);
                last = words[i].slice(-1);
                continue;
            }
            answer.push(i % n + 1 );
            answer.push(parseInt(i / n ) + 1);
            break;
        }
        set.add(words[i]);
        last = words[i].slice(-1);
    }
    if (answer.length  == 0){
        answer.push(0);
        answer.push(0);
    }
    
    return answer;
}
