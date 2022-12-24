function solution(numbers) {
    var answer = 0;
    numbers.forEach((el)=> answer += el);
    answer = answer / numbers.length;
    return answer;
}
