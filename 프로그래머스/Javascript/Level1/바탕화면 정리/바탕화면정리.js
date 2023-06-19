function solution(wallpaper) {
    var answer = [];
    let lux = 51 , luy = 51 , rdx = 0, rdy = 0 //시작점은 최대값 + 1 로 끝점을 최소값으로 설정
    for(let i = 0 ; i < wallpaper.length; i++){
        for(let j = 0 ; j < wallpaper[i].length;j++){
            if(wallpaper[i][j] === '#'){ //파일이면
                if(lux >  i){ //시작 x의 최소값 찾기
                    lux = i;
                }
                if(luy > j){ //시작 y의 최소값 찾기
                    luy = j;
                }
                if(rdx < i){ //끝 x의 최대값 찾기
                    rdx = i;
                }
                if(rdy < j){ // 끝 y의 최대값 찾기
                    rdy = j;
                }         
            }
        }
    }
    answer = [lux , luy , rdx+1 ,rdy+1] //파일은 1칸의 크기를 차지하므로 끝점을 + 1 씩 해준다.
    
    return answer;
}