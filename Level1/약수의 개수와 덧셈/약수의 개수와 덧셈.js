function solution(left, right) {
    var answer = 0;
    let arr = [];
    
    for(let i = left ; i <= right ; i++)
        arr[i] = Number([]);
    
    for(let i = 1; i <= right ; i++)
        for(let j = left ; j <= right ; j++)
            if(j % i === 0)
                arr[j] += 1;

    for(let i = left ; i <= right ; i++){
        if(arr[i] % 2 === 0)
            answer += i;
        else
            answer -= i;
    }
    
    return answer;
}
