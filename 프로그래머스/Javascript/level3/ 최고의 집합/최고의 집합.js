function solution(n, s) {
    var answer = [];
    if ( n > s ) return [-1]
    while( n > 0 ){
        let value = parseInt(s / n);
        s -= value;
        answer.push(value);
        n--
    }

    return answer;
}
