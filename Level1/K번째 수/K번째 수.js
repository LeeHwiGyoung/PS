function solution(array, commands) {
    var answer = [];
    let start;
    let end;
    let order;
    for(let i = 0 ;i < commands.length; i++)
        { 
            for (let j = 0 ;  j < 3 ; j++)
                {
                    if(j === 0)
                        start = commands[i][j];
                    else if(j === 1)
                        end = commands[i][j];
                    else
                        order =  commands[i][j];
                }
            let temp = array.slice(start-1,end);
            temp = temp.sort((a,b)=> a - b);
            answer.push(temp[order-1]);
        }

    return answer;
}
