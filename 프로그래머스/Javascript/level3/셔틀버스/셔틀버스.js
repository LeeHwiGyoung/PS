function solution(n, t, m, timetable) {
    const SHUTTLE_START_HOUR = 9;
    const SHUTTLE_SEAT = m;
    const SHUTTLE_TRIP_NUMBER = n;
    const SHUTTLE_CYCLE = t;
    const shuttleStartTime = SHUTTLE_START_HOUR * 60;        
    const crewArriveTime = timetable.map((time) => {
        const [hour, min] = time.split(':').map(Number);
        return hour * 60 + min;
    }).sort((a,b) => a - b);
    
    let crewIndex = 0;
    let lastTime = 0;
    
   
    const formatHHMM = (time) => {
        const hour = Math.trunc(time / 60).toString().padStart(2,0);
        const min = (time % 60).toString().padStart(2,0);

        return `${hour}:${min}`    
    }

    
    for(let i = 0 ; i < SHUTTLE_TRIP_NUMBER ; i++){
        const currentShuttleTime = shuttleStartTime + i * SHUTTLE_CYCLE;
        let seats = SHUTTLE_SEAT;
      
        while(seats > 0 && crewIndex < crewArriveTime.length && crewArriveTime[crewIndex] <= currentShuttleTime) {
            lastTime = crewArriveTime[crewIndex];
            crewIndex++;
            seats--;
        }
        if(i === SHUTTLE_TRIP_NUMBER - 1){
            if(seats > 0){
                return formatHHMM(currentShuttleTime);
            }else{
                return formatHHMM(lastTime - 1);
            }
        }
     }
}
