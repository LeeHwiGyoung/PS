function solution(places) {
    var answer = [];
    const people = {}
    
    for(let i = 0 ; i <  places.length ; i++){
        people[i] = [];
    }
    
    places = places.map((el, i)=> {
        el = el.map((e , j) => {
            const str =  e.split('')
            str.forEach((char  , k )=> {
                if(char === 'P'){
                    people[i].push([j,k])
                }
            })
            return str
        })
        return el
    });
        

    const check = (x, y , place) => {
        if(x - 1 >= 0 && place[x-1][y] === 'P'){
            return false
        }
        if(x + 1 <= 4 && place[x+1][y] === 'P'){
            return false
        }
        if(y - 1 >= 0 && place[x][y-1] === 'P'){
            return false
        }
        if(y + 1 <= 4 && place[x][y+1] === 'P'){
            return false
        }
        if(x - 2 >= 0 && place[x-2][y] === 'P'){
            if(place[x-1][y] !== 'X')
                return false
        }  
        if(x+2 <=4 && place[x+2][y] === 'P'){
            if(place[x+1][y] !== 'X')
                return false
        }
        if(y-2 >= 0 && place[x][y-2] === 'P'){
            if(place[x][y-1] !== "X")
                return false
        }
        if(y+2 <= 4 && place[x][y+2] === 'P'){
            if(place[x][y+1] !== "X")
                return false
        }
        if(x-1 >= 0 &&  y-1 >= 0 && place[x-1][y-1] ==='P'){
            if(place[x-1][y] !== "X" || place[x][y-1] !== 'X')
                return  false
        }
        if(x+1 <= 4 &&  y-1 >= 0 && place[x+1][y-1] ==='P'){
            if(place[x+1][y] !== "X" || place[x][y-1] !== 'X')
                return  false
        }
        if(x-1 >= 0 &&  y+1 <= 4 && place[x-1][y+1] ==='P'){
            if(place[x-1][y] !== "X" || place[x][y+1] !== 'X')
                return  false
        }
        if(x+1 <=4 &&  y+1 <= 4&& place[x+1][y+1] ==='P'){
            if(place[x+1][y] !== "X" || place[x][y+1] !== 'X')
                return  false
        }
        return true
    }
    
    for(let i = 0 ; i < places.length ; i++){
        const queue = people[i];
        const place = places[i];
        let flag = true
        while(queue.length > 0 && flag == true){
            const [x,y]  = queue.pop();
            if(!check(x,y,place)){
                flag = false
                break
            }
        }
        flag === true ?  answer.push(1)  : answer.push(0)
    }
   
    return answer;
}
