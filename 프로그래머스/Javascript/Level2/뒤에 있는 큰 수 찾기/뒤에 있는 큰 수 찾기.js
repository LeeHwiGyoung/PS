// 작거나 같은 경우 스택에 저장 스택의 top만 비교한다.
// numbers의 길이가 1,000,000이고 [1,1,1,...,1,999] 인 경우 O(n)만큼 탐색
function solution(numbers) {
    var answer = new Array(numbers.length).fill(-1);
    const stack = [];
    
    for(let i = 0 ; i < numbers.length ; i++){
       while(stack.length && numbers[stack.at(-1)] < numbers[i]) {
            answer[stack.pop()] = numbers[i];
        }
        stack.push(i);
    }
    
    return answer;
}