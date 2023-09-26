function solution(n, t, m, p) {
    var answer = '';
    let string = '0123456789ABCDEF'
    let result = '0';
    let number = 1;
    
    const change = (num) => {
        let str = ""
        while(num > 0){
            let result = parseInt(num % n);
            str = string[result] + str
            num = parseInt(num / n)
        }
        return str;
    }
    
    while(result.length < m*t){
        result += change(number)
        number ++;
    }
    
    while(answer.length < t){
        answer += result[p-1]
        p += m
    }
    return answer
    
}
