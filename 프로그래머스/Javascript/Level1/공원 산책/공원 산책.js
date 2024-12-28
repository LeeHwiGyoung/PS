function solution(park, routes) {
    let location = [];
    const WIDTH = park[0].length;
    const HEIGHT = park.length;
    const directions = { N: [-1, 0], S: [1, 0], W: [0, -1], E: [0, 1] };
    const parkGraph = park.map((row, x)=> {
        const column = row.split('');
        if(column.includes('S')){
            location= [x, column.indexOf('S')]
        }
        return column;
    })
    
    for(const route of routes) {
        const [op , stepsStr] = route.split(" ");
        const steps = parseInt(stepsStr);
        const [dx, dy] = directions[op]
        let [nx, ny] = location;
        let isValid = true;
        for(let step = 0 ; step < steps ; step++){
             nx += dx
             ny += dy
             if (nx < 0 || nx >=  HEIGHT || ny < 0 || ny >= WIDTH || parkGraph[nx][ny] === 'X'){
                 isValid = false;
                 break;
             }
        }
        if (isValid) {
          location = [ nx , ny]
        }
    }
   
    return location;
}
