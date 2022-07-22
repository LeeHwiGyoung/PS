function solution(arr)
{
    var answer = [];
    let sequence;
    arr.forEach((el)=>{
        if(el !== sequence){
            sequence = el;
            answer.push(sequence);
        }
    })
    return answer;
}
