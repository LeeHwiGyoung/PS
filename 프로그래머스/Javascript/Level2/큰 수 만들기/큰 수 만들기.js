
function solution(number, k) {
    let answer = '';
    let cnt = 0;
    let stack = []
    for(let i = 0 ; i < number.length ; i++){
        let val = number[i];
        while(stack.at(-1) < val){
                stack.pop();
                cnt ++;
                if(cnt == k){
                    answer = stack.join("") + number.slice(i);
                    return answer;
                }
            }
            stack.push(val);
    }     
    if (cnt < k)
        return answer = number.slice(0, - k - cnt);
}
