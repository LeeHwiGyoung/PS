
function solution(cacheSize, cities) {
    var answer = 0;
    let cache = [];
    let len = 0; // curcacheSize
    if (cacheSize == 0){
        return 5 * cities.length;
    }
    for(let i = 0 , max = cities.length ; i < max  ; i++){
        let str = cities[i].toUpperCase();
        let idx = cache.indexOf(str);
        if(idx != -1){ //hit이면
            cache.splice(idx, 1);
            cache.push(str);
            answer += 1;
        }
        else{ //miss면
            if(len == cacheSize){
                cache.shift();
                len--;
            } 
            cache.push(str);
            answer += 5;
            len ++;
        }
    }
    return answer;
}
