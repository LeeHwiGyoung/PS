function solution(citations) {
    var answer = 0;
    citations.sort((a,b)=>b-a); //역순 정렬
 

    while(answer+1<=citations[answer]) {
        answer++
    }

    return answer;
}
