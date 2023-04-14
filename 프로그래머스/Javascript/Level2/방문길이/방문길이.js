function solution(dirs) {
    var answer = 0; // 처음 가는 길의 개수
    let set = new Set(); //중복을 체크할 Set
    let coordinate = [0,0]; //현재 좌표
    
    const move = (command) => { //Command를 파라미터로 받는다
        if(command === 'U' && coordinate[1] + 1 <= 5){ //'U' 명령어이면서 맵 끝에 도달 X
            return [coordinate[0] , coordinate[1] + 1]; //위로 한 칸 이동
        }else if(command === "D" && coordinate[1] - 1 >= -5){//'D' 명령어이면서 맵 끝에 도달 X
            return [coordinate[0] ,coordinate[1] - 1]; //아래로 한 칸 이동
        }else if(command === "R" && coordinate[0] + 1 <= 5){//'R' 명령어이면서 맵 끝에 도달 X
            return [coordinate[0] + 1 ,coordinate[1]]; // 오른쪽으로 한 칸 이동
        }else if(command ==="L" && coordinate[0] - 1 >= -5){//'L'명령어이면서 맵 끝에 도달 x
            return [coordinate[0] - 1 ,coordinate[1]]; //왼쪽으로 한 칸 이동
        }else { //맵 끝에 도달하면
            return [coordinate[0] , coordinate[1]]; //이동 x
        }
    }
    
    const check = (from , to) => { // from : 현재 위치 to: 다음 위치 
        if(from === to) //이동 x
            return false; 
        if(set.has(from+to) || set.has(to+from) ){ //이미 이동한 길이면 
            return false
        }
        return true;
    }
    
    for(let i = 0 ; i < dirs.length ; i++){
        const nextCoordinate = move(dirs[i]);
        const strCoordinate = coordinate[0].toString() + coordinate[1].toString();
        const strNCoordinate = nextCoordinate[0].toString() + nextCoordinate[1].toString();
        //배열로 set.has 판단 시 javascript의 Object 비교를 하여 같은 값을 갖고 있어도 다른 객체로 봄
        if(check(strCoordinate, strNCoordinate) ){
            set.add(strCoordinate+strNCoordinate);
        }
        coordinate = nextCoordinate;
        }
    answer = set.size;
    return answer;
}