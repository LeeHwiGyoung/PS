function solution(genres, plays) {
    let map = new Map();
    var answer = [];
   
    for(let i = 0 ; i < genres.length ; i++){
        const genre = genres[i];
        if(!(map.has(genre))){  //처음 들어오는 장르이면
            const genreObj = {
                total : plays[i],
                first : [i , plays[i]],
                second : [-1 , -1]
            }
            map.set(genre, genreObj);
            continue
        }
        else {
            const cur = [i , plays[i]];
            const obj = map.get(genre)
            obj.total +=  plays[i]
            if(obj.first[1] < cur[1]){
                obj.second = obj.first;
                obj.first = cur;
            }else if(obj.second[1] < cur[1]){
                obj.second = cur;
            }
        }
    }
  
    const sortedMap = new Map([...map.entries()].sort((a,b)=> b[1].total  - a[1].total));
    
    
    sortedMap.forEach((item)=> {
        answer.push(item.first[0])
        if(item.second[0] !== -1){
          answer.push(item.second[0])      
        }
    })
 
    return answer;
}