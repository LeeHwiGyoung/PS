function solution(survey, choices) {
    var answer = '';
    let score = new Array(8).fill(0); //[0]  = R,[1] = T, [2] = C, [3] =  F, [4] = J,[5] = M, [6] = A, [7] = N
    
    for(let i = 0 , max = survey.length ; i < max ; i++){
        if(survey[i] == "TR"){  //[0][1] 튜브라이언형 질문 1 : 라이언 3 , 7 :  튜브 3
            if(choices[i] == 1){
                score[1] += 3;
            }
            else if(choices[i] == 2){
                score[1] += 2;
            }
            else if(choices[i] == 3){
                score[1] += 1;
            }
            else if(choices[i] == 4){
                continue;
            }
            else if(choices[i] == 5){
                score[0] += 1;
            }
            else if(choices[i] == 6){
                score[0] += 2;
            }
            else{
                score[0] += 3;
            }
        }
        else if(survey[i] == "RT"){ //[0][1] 라이언튜브형 질문 질문 1 :튜브 3  , 7 :  라이언 3
            if(choices[i] == 1){
                score[0] += 3;
            }
            else if(choices[i] == 2){
                score[0] += 2;
            }
            else if(choices[i] == 3){
                score[0] += 1;
            }
            else if(choices[i] == 4){
                continue;
            }
            else if(choices[i] == 5){
                score[1] += 1;
            }
            else if(choices[i] == 6){
                score[1] += 2;
            }
            else{
                score[1] += 3;
            }
        }
        else if(survey[i] == "FC"){ //[2][3] 프로도 콘 
            if(choices[i] == 1){
                score[3] += 3; 
            }
            else if(choices[i] == 2){
                score[3] += 2;
            }
            else if(choices[i] == 3){
                score[3] += 1;
            }
            else if(choices[i] == 4){
                continue;
            }
            else if(choices[i] == 5){
                score[2] += 1;
            }
            else if(choices[i] == 6){
                score[2] += 2;
            }
            else{
                score[2] += 3;
            }
        }
        else if(survey[i] == "CF"){ //[2][3] 콘프로도 형
            if(choices[i] == 1){
                score[2] += 3;
            }
            else if(choices[i] == 2){
                score[2] += 2;
            }
            else if(choices[i] == 3){
                score[2] += 1;
            }
            else if(choices[i] == 4){
                continue;
            }
            else if(choices[i] == 5){
                score[3] += 1;
            }
            else if(choices[i] == 6){
                score[3] += 2;
            }
            else{
                score[3] += 3;
            }
        }
        else if(survey[i] == "MJ"){// [4][5]  무지 제이지형
            
            if(choices[i] == 1){
                score[5] += 3;
            }
            else if(choices[i] == 2){
                score[5] += 2;
            }
            else if(choices[i] == 3){
                score[5] += 1;
            }
            else if(choices[i] == 4){
                continue;
            }
            else if(choices[i] == 5){
                score[4] += 1;
            }
            else if(choices[i] == 6){
                score[4] += 2;
            }
            else{
                score[4] += 3;
            }
        }
        else if(survey[i] == "JM"){ // [4][5]  제이지무지형
            if(choices[i] == 1){
                score[4] += 3;
            }
            else if(choices[i] == 2){
                score[4] += 2;
            }
            else if(choices[i] == 3){
                score[4] += 1;
            }
            else if(choices[i] == 4){
                continue;
            }
            else if(choices[i] == 5){
                score[5] += 1;
            }
            else if(choices[i] == 6){
                score[5] += 2;
            }
            else{
                score[5] += 3;
            }
        }
        else if(survey[i] == "NA"){ //[6][7]
            if(choices[i] == 1){
                score[7] += 3;
            }
            else if(choices[i] == 2){
                score[7] += 2;
            }
            else if(choices[i] == 3){
                score[7] += 1;
            }
            else if(choices[i] == 4){
                continue;
            }
            else if(choices[i] == 5){
                score[6] += 1;
            }
            else if(choices[i] == 6){
                score[6] += 2;
            }
            else{
                score[6] += 3;
            }
        }
        else{
            if(choices[i] == 1){
                score[6] += 3;
            }
            else if(choices[i] == 2){
                score[6] += 2;
            }
            else if(choices[i] == 3){
                score[6] += 1;
            }
            else if(choices[i] == 4){
                continue;
            }
            else if(choices[i] == 5){
                score[7] += 1;
            }
            else if(choices[i] == 6){
                score[7] += 2;
            }
            else{
                score[7] += 3;
            }
        }
    }
    score[0] >= score [1] ? answer += "R" : answer += "T"; 
    score[2] >= score [3] ? answer += "C" : answer += "F"; 
    score[4] >= score [5] ? answer += "J" : answer += "M"; 
    score[6] >= score [7] ? answer += "A" : answer += "N"; 
    
   
    return answer;
}
