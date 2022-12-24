function solution(answers) {
    var answer = [];
    let num = [0,0,0]; //맞춘 개수
    const person = [ [1, 2, 3, 4, 5], [2 , 1 ,2 ,3 ,2, 4 ,2 ,5] , [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] ]; // 대답패턴
   
    answers.forEach((el , i)=>{
        if (el ===  person[0][i%5]) //수포자 1
            num[0] += 1;
        if (el === person[1][i%8]) //수포자 2
            num[1] += 1;
        if (el === person[2][i%10]) //수포자 3
            num[2] += 1;
    })
    
    const win = Math.max(...num); // 가장 많이 맞춘 문제 수
    
    num.forEach((el, i)=>{ 
        if(el === win) 
            answer.push(i+1); 
    })
    
    return answer;
}
