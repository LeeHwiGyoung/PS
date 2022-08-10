function solution(clothes) {
    var answer = 1;
    let dict = {};
    for(let i = 0 ; i < clothes.length ; i++){
        const key = clothes[i][1];
        if(dict[key] == undefined){
            dict[key] = 1;
        }
        dict[key] +=  1;
    }
    for(var keys in dict){
        answer *= dict[keys];
    }
    
    return answer - 1;
}
