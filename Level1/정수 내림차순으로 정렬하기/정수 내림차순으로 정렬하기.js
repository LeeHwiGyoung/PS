function solution(n) {
    var answer = 0;
    answer = n.toString().split("").sort((a,b)=> a-b ).reverse().join("");
    answer = parseInt(answer);
    return answer;
}
