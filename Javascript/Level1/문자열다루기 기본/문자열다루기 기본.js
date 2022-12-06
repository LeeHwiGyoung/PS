function solution(s) {

    if(s.length === 4 || s.length === 6){
        if(s.includes("e"))
            return false;
        else{
            if(!isNaN(s))
                return true;
            else
                return false; 
        }
    }
    else
        return false;
}
