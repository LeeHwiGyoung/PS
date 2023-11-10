/*
m : 찾고자 하는 곡
musicinfos(배열) : 시작시간 , 끝난 시간 , 제목 , 음계
음계를 실행 시간만큼 늘린 후 일치하는 길이 탐색 => 가장 큰 것을 선택
*/

function solution(m, musicinfos) {
    var answer = '(None)'; // 없는 경우
    let count = 0; //최대 재생 시간
    
    const extend = (scale , time) => { //음악이 재생된 시간만큼 악보를 늘리는 함수
        let str = "";
        let t = time;
        const len = scale.length;
        for(let i = 0 ; i < t ; i++){
            str += scale[i % len];
        }
        return str
    } 
    
    m = m.replace(/(C|D|F|G|A)#/g, (_, a) => a.toLowerCase());// #인 경우 소문자로 바꿔 토큰화
    
    musicinfos = musicinfos.map((el)=> {
        let [start, end , title , scale] = el.split(',');
        const start_time = start.slice(0,2) * 60 + start.slice(3,5) * 1; //정렬에 사용
        const end_time = end.slice(0,2) * 60 + end.slice(3,5) * 1;
        const time = end_time - start_time; //실제 재생 시간을 초로 변환
        scale = scale.replace(/(C|D|F|G|A)#/g, (_, a) => a.toLowerCase()) //#인 경우 소문자로 바꿔 토큰화 
        const listen = extend(scale, time); //토큰화 된 음계를 재생 시간만큼 늘리기
        return [start_time, time , title , listen]
    }).sort((a,b)=> a[0]-b[0])
    
    const check = (listen, m) => { //재생된 시간만큼 늘린 악보와 네오가 기억하는 음계를 토큰화한 것과 비교 
        const re = new RegExp(m , "g");
        return re.test(listen);
    }

    for(let i = 0; i < musicinfos.length ; i++){
        const [start_time, time, title, listen] = musicinfos[i];
        if(check(listen , m) && time > count){//일치하는 음계가 있으면서 최대 재생 시간이면
            count = time 
            answer = title
        }
    }

   
    return answer
}
