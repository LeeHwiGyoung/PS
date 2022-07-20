function solution(s){
    let cnt_p = 0, cnt_y = 0;
    for(let i = 0; i < s.length ; i++){
        if (s[i] === 'p' || s[i] ==='P')
            cnt_p +=1;
        else if(s[i] === 'y' || s[i] === 'Y')
            cnt_y += 1;
        else
            continue;
    }
    if(cnt_p === cnt_y)
        return true;
    else
        return false;
}
