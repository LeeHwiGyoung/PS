function solution(fees, records) {
    var answer = [];
    
    let cars = {},keys = []; //key = 번호판 arr[0] = time [1] = last상태 arr[2] = 누적
    for(let i = 0 , max =records.length ; i < max ; i++){
        const hour = records[i].slice(0,2);
        const min = records[i].slice(3,5)
        const car = records[i].slice(6,10);
        const inAndOut = records[i].slice(11,14);
        if(car in cars){
            if(inAndOut == 'OUT'){
                cars[car][3] = Number(cars[car][3]) + Number(hour) - Number(cars[car][0]); 
                cars[car][4] = Number(cars[car][4]) + Number(min) - Number(cars[car][1]);
            }
            cars[car][0] = hour;
            cars[car][1] = min;
            cars[car][2] = inAndOut;
        }
        else{
            cars[car] = [hour, min, inAndOut , 0 , 0];
            keys.push(car);
        }
         
    }
    
    keys.sort();
    //console.log(keys);
    
    for(let i = 0; i < keys.length ; i++){
        const key = keys[i];
        if(cars[key][2] == "IN"){
            cars[key][3] += 23 - cars[key][0];
            cars[key][4] += 59 - cars[key][1];
        }
        const time = cars[key][3] * 60 + cars[key][4] - fees[0];
       // console.log(key , time);
        if(time <= 0){
            answer.push(fees[1]);
        }
        else{
            let cost = fees[1];
            cost = cost + Math.ceil(time / fees[2]) * fees[3]; 
            answer.push(cost);
        }
    }
    return answer;
}
