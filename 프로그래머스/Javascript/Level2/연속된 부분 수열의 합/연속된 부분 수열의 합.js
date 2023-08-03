function solution(sequence, k) {
    var answer = [0,0];
    let accumulate = [0]; //누적합 배열
    let minLength = sequence.length; //부분 수열의 최대 길이
    sequence.forEach((a,b)=> {
        accumulate.push(a + accumulate[b]) // 누적합 저장
    })
    let left = 0; 
    let right = 0;
    
    while(left <= right){ 
        let sum = accumulate[right] - accumulate[left];
        if(sum == k){
            let curLength = right - left - 1
            if(curLength < minLength){ //최소 길이 저장
                answer = [left, right - 1]
                minLength = curLength
            }
        }
        if(k > sum){ 
            right ++;
        }
        else {
            left ++;
        }
    }
    return answer
}
