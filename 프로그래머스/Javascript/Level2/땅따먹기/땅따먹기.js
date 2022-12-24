function solution(land) {
    var answer = 0;
    let sum = [];
    for(let i =0  ; i < 4 ; i++) 
        sum.push(land[0][i]);  //초기상태
  
    for (let i = 1 ; i < land.length ; i++){
        for(let j = 0 ; j < 4 ; j++){
            sum[j] = Math.max(...land[i-1].slice(0,j) ,  ...land[i-1].slice(j+1)) + land[i][j]; //이전 행의 같은 열을 제외한 최대값  선택
        }
        for(let j = 0 ; j <  4 ; j++)
            land[i][j] = sum[j] //land[i][j] 에 sum[j] 를 대입해 dp와 같이 만듬  
    }
    answer = Math.max(...sum); // 끝난후 최대값 찾기
    return answer;
}
