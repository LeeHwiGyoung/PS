function solution(name) {
    var answer = 0;
    const alpha_map = new Map(); //알파벳 순서 저장
    let greedy = new Array(name.length).fill('A'); //그리디 방법을 택할 문자열
    let min = greedy.length - 1;
    for(let idx = 0 ; idx < 26 ; idx++){
        alpha_map.set(String.fromCharCode(65 + idx) , idx + 1); //Map에 아스키 코드를 사용하여 알파벳 순서 저장
    }
    
    for(let i = 0 ; i < greedy.length ; i++){
        const top = alpha_map.get(name[i]) - 1; //위 화살표를 눌러 알파벳을 변경
        const down = 27 - alpha_map.get(name[i]); //아래 화살표를 눌러 알파벳을 변경
        top > down ? answer += down : answer += top; // 둘 중 최소인 것을 선택
        let nextIndex = i+1;
        
        while(nextIndex < name.length && name[nextIndex] === greedy[nextIndex])
            nextIndex += 1;
        min = Math.min(min, (i*2) + name.length - nextIndex , i + 2 * (name.length - nextIndex));
        
    }
    return answer+min;
}
    
    
