//진출 시간으로 정렬
//자신이 나가야 하는 타이밍에 자신이 false인 경우에만 새로운 카메라 설치

function solution(routes) {
    var answer = 0;
    let queue = [];
    let camera; //카메라 위치
    
    routes.sort((a,b)=> { //진출 시점으로 정렬
        return a[1] - b[1]
    })
    
    camera = routes[0][1]; //초기설정
    answer ++;
    
    for(let i = 1 ; i < routes.length ; i++){
        const [inIc , outIc] = routes[i]; //진입 진출 시점으로
        if(camera >= inIc && camera <= outIc){ //카메라가 그 사이에 있으면
            continue; //설치 x
        }else{ //아니면 
            camera = outIc; //진출 시점으로 설치하기
            answer++;
        }
    }

    return answer;
}
