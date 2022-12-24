function solution(array) {
    var answer = 0;
    array.sort((a,b)=>a-b);
    const center = parseInt(array.length / 2);
    answer = array[center];
    return answer;
}
