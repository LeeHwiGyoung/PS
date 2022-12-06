function solution(n) {
    let answer = 0;
    const arr = new Array(n + 1).fill(false,0,2).fill(true,2);
    for(let i = 2 ; i*i <= n; i++)
    {
        if(arr[i]){
            for(let j = i * i ; j  <= n ; j+=i)
            {
                arr[j] = false;
            }
        }
    }

    answer = arr.filter((el)=> el === true).length;
    
    return answer;
}
