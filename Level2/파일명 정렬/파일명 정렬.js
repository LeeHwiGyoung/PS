function solution(files) { 
    var answer = []; //정답 배열
    let slice = []; //files을 head ,number, tail 로 나눠서 저장하기 위해
    let head_idx; //나눠서 저장할 때 사용할 head_idx
    let number_idx; //number_idx
    
    files.forEach((el)=>{ //head , number , slice로 나눠서 저장
        let flag = false; //number부분을 판별하기 위해서
        for(let i = 0; i < el.length ; i++){
            if(!isNaN(el[i]) && flag == false){ //처음으로 숫자가 나왔을 때
                if(el[i] == " ") //공백도 isNaN에서 숫자로 판단하기 때문에 
                    continue; 
                head_idx = i; //공백아니면 idx저장
                flag = true; //head가 끝남을 의미
            }
            if(!isNaN(el[i]) && flag == true){ //이미 숫자가 1번 이상 나왔고 숫자이면
                if(i - head_idx < 5){ //숫자는 크기가 5 이하
                    number_idx = i+1;
                }
            }
        }
        
        const head = el.slice(0,head_idx); //각각 나눠서
        const number = el.slice(head_idx,number_idx);
        const tail = el.slice(number_idx,el.length);
        
    
        slice.push([head, number, tail]); //저장
    });
    
    slice.sort((a,b)=>{   //sort
        if(a[0].toUpperCase() > b[0].toUpperCase()) // head의 사전순인데 비교시 대문자로만 하여 대소문자 구분을 없앰
            return 1; 
        else if(a[0].toUpperCase() == b[0].toUpperCase()){ //head가 같으면
                let number_a  = parseInt(a[1]);//왼쪽 0 제거
                let number_b  = parseInt(b[1]); 
                if(number_a > number_b) //숫자크기순
                    return 1;
                else if(number_a == number_b)
                    return 0;
                else
                    return -1;
            }
        else
            return -1
    })
    
    for(let i = 0 ; i < slice.length ; i++){
        answer.push(slice[i].join(''));
    }
    
    return answer;
}
