function solution(numbers, target) {
    var answer = 0;
    let standard_cnt = numbers.length; //함수 종료 조건

    function dfs(cur, cnt){
        if(cnt == numbers.length){ // numbers의 배열을 다 더하면
            if(cur == target) //현재 값이 target과 같으면
                answer += 1; 
            return;
        }
        dfs(cur + numbers[cnt] , cnt + 1); // 다음 배열의 값을 더하는 것으로 dfs
        dfs(cur - numbers[cnt] , cnt + 1); // 다음 배열의 값을 빼는 것으로 dfs
    }

    dfs(0, 0);
    
    return answer;
}
