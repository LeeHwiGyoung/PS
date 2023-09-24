/*
 cordinate = 0
 outline = 1
 in = 2
 
   ㅡ    1 1
     |   1 1  : * 2
   ㅡ    1 1
*/

function solution(rectangle, characterX, characterY, itemX, itemY) {
    var answer = Infinity;
    let cordinate = Array.from({length: 103 } , ()=> new Array(103).fill(0));
    let visit = Array.from(cordinate , () => new Array(103).fill(false))
    const move = [[1, 0] , [-1 , 0] , [0 , 1], [0, -1]]
    
    const double = rectangle.map((el) => {
        const [lx,ly, rx, ry] = el;
        return [lx * 2 , ly * 2, rx* 2, ry* 2]
    })
    
    for(let i = 0 ; i < double.length ; i++){
        const [leftX , leftY , rightX , rightY ] = double[i];
        for(let x = leftX ; x <= rightX ; x++){
            for(let y = leftY ; y <= rightY ; y++){
                if(x === leftX  || x == rightX|| y === leftY || y === rightY ){
                    if(cordinate[x][y] === 0)
                        cordinate[x][y] = 1;
                    continue;
                }
                cordinate[x][y] = 2   
            }
        }
    }
    
    const checkNext = (x , y) =>{
        if( 0 <= x && x < 103 && 0<=y && y < 103)
            return true
        return false
    } 
    
    const dfs = (cX, cY , iX , iY , cnt) => {
        if(cX === iX && cY === iY){
            if(answer > cnt){
                answer = cnt;
            }
            return
        }
    
        for(let i = 0 ; i < move.length; i++){
            const nCx = cX + move[i][0];
            const nCy = cY + move[i][1];
            
            if(visit[nCx][nCy] === false && cordinate[nCx][nCy] === 1 &&  checkNext(nCx,nCy)){
                visit[nCx][nCy] = true;
                dfs(nCx,nCy,iX,iY , cnt+1);
                visit[nCx][nCy] = false
            }
        }
    }
    
    characterX *= 2
    characterY *= 2
    itemX *= 2
    itemY *= 2
    
    visit[characterX][characterY] = true
    dfs(characterX,characterY , itemX, itemY , 0);
    
    
    return answer / 2;
}
