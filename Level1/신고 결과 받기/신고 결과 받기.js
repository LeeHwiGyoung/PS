function solution(id_list, report, k) {
    var answer = [];
    let report_list = [];
    
    for(let i = 0 ; i < id_list.length ; i++){
        answer.push(0);  //answer 0 으로 초기화
    }
    
    id_list.map((user)=>{
        report_list[user] = []; //id_list의 값으로 배열에 접근하기 위해
    })
    
    report.map((user)=> {
        const[user_id , report_id] = user.split(' ')
        if(!report_list[report_id].includes(user_id)) //신고한 적이 없으면
            report_list[report_id].push(user_id); //추가
    })
   
    for(let key in report_list){
        if(report_list[key].length >= k)
        {
            report_list[key].map((user)=>{ //정지된 유저를 신고한 유저
                answer[id_list.indexOf(user)] += 1 //신고한 유저의 answer ++;
                //console.log(key , user);
            })
        }
    }
    
    return answer;
}
