function solution(record) {
    var answer = [];
    
    let nickDic = {}; //uid로 닉네임을 저장할 dic
    
    record.map((user)=> {
        const[keyword, uId, nickName] = user.split(" ");
       
        if (keyword === 'Enter' || keyword === 'Change')
            nickDic[uId] = nickName;
    }) //uid로 닉네임을 저장
    
    record.map((user)=> {  //저장된 dic을 사용함
        const[keyword, uId] = user.split(" ");
         //console.log(keyword, uId );
        switch(keyword){
            case "Enter": 
                answer.push(nickDic[uId] + "님이 들어왔습니다.");
                break;
            case "Leave":
                answer.push(nickDic[uId]+ "님이 나갔습니다.");
                break;
            default:
                break;
        }
        
    })
   // console.log(nickDic);
    return answer;
}
