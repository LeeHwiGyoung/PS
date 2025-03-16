// startday % 7 = 일월화수목금토가 됨
//주말 출근 x  (index + startDay) %  7 = 6 || 0 이면 체크 x
//아닌 경우에 고려해야 할 점
// 50분으로 해둔 경우 시간이 바뀜 즉 
// 7 50 => 8 : 00 까지 
// 750  < 60 <  800 
function solution(schedules, timelogs, startday) {
    let answer = 0;
    
    schedules.map((schedule, index) => {
        const hour = Math.trunc(schedule / 100);
        const min = schedule - (hour  * 100);
        
        let targetHour = hour;
        let targetMin = min + 10;
        if(targetMin >= 60){
            targetHour += 1;
            targetMin %=60;
        }
        
        const targetSchedule = targetHour * 100 + targetMin;
        
        const filteredTimeLog = timelogs[index].filter((time ,index) => {
            if((index + startday) % 7 === 0 || (index + startday) % 7 === 6){ //일요일이나 토요일인 경우
                return false;
            }
            
            if(time > targetSchedule){
                return false
            }
            return true
        })
        
        if(filteredTimeLog.length === 5){
            answer ++;
        }
        
    })
    return answer;
}
