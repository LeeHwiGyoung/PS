function solution(n, k) {
    var answer = [];
    
    const people = Array.from({length : n}, (_, i)=> i + 1);
    
    const factorial = Array.from({ length : n + 1 }).reduce((acc , _ , idx)=> {
        const nextValue = idx === 0 ? 1 : acc[idx - 1] * idx
        return [...acc, nextValue];    
    }, [])
 
    k--;
    
    while(n > 0){
        const target = Math.trunc(k / factorial[n-1]);
        answer.push(people[target]);
        people.splice(target, 1);
        k = k % factorial[n-1]
        n--;
    }
    
    return answer;
}
