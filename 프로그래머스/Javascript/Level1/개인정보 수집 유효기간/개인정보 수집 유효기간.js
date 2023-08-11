//1year 336
function solution(today, terms, privacies) {
    var answer = [];
    let termsMap = new Map();
    
    for(let i = 0 ; i <  terms.length ; i++){
        const [type , term]  = terms[i].split(' ') //type에 따른 기간을 저장
        termsMap.set(type , term * 28)
    }
    
    const changeFormat = (el) => { //개인정보 수집일자를 2000.01.01을 기준으로 변경
        const year = parseInt(el.slice(0,4)) - 2000
        const month = parseInt(el.slice(5,7))
        const day = parseInt(el.slice(8,10))
        return year * 336 + month * 28 + day
    }
    
    today =  changeFormat(today)

    const pri = Array.from(privacies , (el) =>{ 
        return [changeFormat(el),  el.slice(11)] //숫자날짜와 타입으로 저장
    })
    
    for(let i = 0 ; i < pri.length ; i++){
        const [date , type] = pri[i]
        const subDate = termsMap.get(type);
        if(today - subDate >= date) { //현재날짜에서 유효기간 만큼 뺏을 때 date보다 크거나 같으면 날짜가 지난 것으로 판별
            answer.push(i+1)
        }
    }    
 
    return answer;
}
