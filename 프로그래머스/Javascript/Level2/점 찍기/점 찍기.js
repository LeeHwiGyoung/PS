function solution(k, d) {
    let answer = 0
    const getMaxY = (x , r) => {
       return Math.sqrt(r**2 - x**2)
    }
    
    for(let i = 0 ; i <= d ; i+=k){
        const maxY = getMaxY(i , d)
        answer += parseInt(maxY / k) + 1
    }
    return answer;
}
