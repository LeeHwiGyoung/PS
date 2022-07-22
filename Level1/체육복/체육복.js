
function solution(n, lost, reserve) {
    var answer = 0;
    let arr = new Array(n).fill(true);
    lost.sort((a,b)=> a- b);
    reserve = reserve.filter((el)=>{
        if(!lost.includes(el))
            return true;
        else{
            lost.splice(lost.indexOf(el),1);
        }
    });

    lost.forEach((el)=>{
        if(el === 1){
            if(reserve.includes(el + 1))
                reserve.splice(reserve.indexOf(el+1), 1);
            else
                arr[el - 1] = false;
            }
        else{
            if(reserve.includes(el - 1)){
                reserve.splice(reserve.indexOf(el - 1), 1);
            }
            else if(reserve.includes(el + 1)){
                reserve.splice(reserve.indexOf(el + 1), 1);
            }
            else{
                arr[el-1] = false;
            }
        }
    });
    answer = arr.filter((el)=>el === true).length;
    return answer;
}
