function solution(book_time) {
    var answer = 0;
    let curTime = 0;
    let useRoom = [];
    
    let book = Array.from(book_time , (el)=> { //시간을 분 단위로 변경
        const [startH, startM] =  el[0].split(':')
        const [endH, endM] = el[1].split(':')
        return [Number(startH) * 60 + Number(startM) , Number(endH)*60+ Number(endM)]
    }) //[시작 시간 , 끝나는 시간]
  
    book.sort((a,b)=> b[0] - a[0]) //입실시간의 내림차순 정렬 , shift연산보다 pop 연산이 빠르기 때문
    
    while(book.length > 0){
        const [start , end] = book.pop(); //입실 퇴실 시간  
        useRoom = useRoom.filter((x)=> x > start - 10);//이용 후 청소가 끝난 방 체크 
        useRoom.push(end);//방을 빌려준다. 
        answer = Math.max(useRoom.length , answer); //useRoom의 길이가 곧 대실해준 방의 개수
    }
    
    return answer;
}
