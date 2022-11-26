function solution(numbers) {
    var answer = []; //answer 배열 
    for (let i = 0 ; i < numbers.length - 1 ; i++) // 이미 계산한 것을 또 계산하지 않기 위해
    {
        for (let j = i + 1 ; j < numbers.length ; j++)
            {
                answer.push(numbers[i] + numbers[j]);
            }
    }
    answer = new Set(answer.sort()); //set으로 만들어서 중복된 값을 삭제
    answer = Array.from(answer); // 다시 array로 바꿔서
    answer.sort(function(a,b){  //오름차순으로 sort
        return a - b;
    });
    return answer;
}
