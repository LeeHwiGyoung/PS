function solution(sizes) {
    var answer = 0;
    let w = []; 
    let h = []; 

    sizes.map((el)=>{ // 가로 세로는 회전하면 같기 때문에 각 명함을 가로 세로 순이 아닌 크기가 긴 순으로 정렬
        el.sort((a,b)=>a-b);
        w.push(el[0]);
        h.push(el[1]);
    }) 
 
    max_x = Math.max(...w);
    max_y = Math.max(...h);
    
    answer = max_x * max_y;
    
    
    return answer;
}
