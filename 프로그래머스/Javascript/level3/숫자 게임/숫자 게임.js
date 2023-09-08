function solution(A, B) {
    var answer = 0;
    
    let Bidx = 0; //B 탐색 인덱스
    
    A.sort((a,b)=> a-b); //오름차순 정렬
    B.sort((a,b)=> a-b);
    
    for(let i = 0 ; i < A.length ; i++){
        const aCard = A[i]; //A가 내는 카드
        for(let j =  Bidx ; j < B.length ; j++){ //A와 B 둘 다 오름차순으로 정렬하여 A의 카드보다 작은 카드는 다음에도 지는 카드이기 때문에 B의 탐색 인덱스를 사용
            if(aCard  < B[j]){
                Bidx = j+1 ; //다음 카드로 설정
                answer ++; 
                break;
            }
        }
    }
    
    return answer;
}
