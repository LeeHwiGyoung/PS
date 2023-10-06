function solution(data, col, row_begin, row_end) {
    var answer = 0;
    let values = [];
    
    data.sort((a,b) => {
        if(a[col - 1] > b[col - 1]){
            return 1 //오름차순
        }else if(a[col- 1] === b[col- 1]){ //같을 떈
            if(a[0] > b[0]) //내림차순
                return -1
            else
                return 1
        }else{
             return -1
        }
    })
    
    const hash = (row) => {
        const value = data[row - 1].reduce((ac, cv) => ac + cv % row , 0); //합 저장
        return value;
    }
    
    for(let i = row_begin ; i <= row_end ; i++){
        values.push(hash(i)) //hash 값 저장
    }
    
    answer = values[0] //초항
    
    for(let i = 1 ; i < values.length ; i++){
        answer = answer ^ values[i]; // xor 계산
    }
    
    return answer;
}
