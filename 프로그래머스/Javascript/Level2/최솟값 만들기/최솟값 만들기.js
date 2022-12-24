function solution(A,B){ //최소  최대의 곱이 최소
    var answer = 0;
    A = A.sort((a,b) => a-b);
    B = B.sort((a,b) => b-a);
    for(let i = 0 , len = A.length ; i < len ; i++){
        answer += A[i] * B[i];
    }
    return answer;
}
