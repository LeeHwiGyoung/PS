function solution(numbers) {
    var answer = [];
    for(let i = 0 ; i < numbers.length ; i++){
        if(numbers[i] % 2 == 0){//짝수
            answer.push(numbers[i] + 1)
        }else{ //홀수
            const binary = 0 + numbers[i].toString(2); //11의 경우를 위해서
            const idx = binary.lastIndexOf('0'); //가장 마지막 0을 찾아서 10으로 교체
            answer.push(parseInt(`${binary.slice(0, idx)}10${binary.slice(idx + 2)}`, 2))
        }
    }
    return answer;
}