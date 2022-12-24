function solution(numbers) {
    var answer = '';
    if(numbers.every((el)=>el == 0)) //모든 입력값이 0이면 0000이 아닌 0을 출력하기 위해서
        return '0';
    let str_numbers = numbers.map((el)=> String(el));
    str_numbers.sort((a,b)=>(b+a) - (a+b)); //사전순으로 정렬
    str_numbers.forEach((el)=>{
        answer += el;
    })
    return answer;
}
