function solution(n, arr1, arr2) {
    var answer = [];
    let decimal = [];
    for (let i =0; i < n ;  i++)
    {
         decimal.push(arr1[i] | arr2[i]);   // 두 배열을 OR 연산하여 새로운 배열에 저장
    }
    decimal.map((dec, index)=>{
        let str = "";
        dec = dec.toString(2); //OR 연산 값을 2진수로 변환
        for(let i = 0  ; i < dec.length ;  i++) 
        {
            if(dec[i] === '1') // 2진수의 값이 1이면 즉, 벽이면 "#" 
                str += "#";
            else //아니면 공백
                str += " ";
        }
        while(str.length < n) // 자릿수에 맞춰 앞에 공백 추가
        {
             str = " "  + str; 
        }
        answer[index] = str;
    })
    return answer;
}
