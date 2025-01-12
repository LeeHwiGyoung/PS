function solution(s) {
    let answer = s.length;
    
    const compressString = (target , size) => {
        let result = "";
        let lastStr = target.slice(0, size); // 첫 번째 부분 문자열
        let count = 1;

        for (let i = size; i < target.length; i += size) {
            const sliceStr = target.slice(i, i + size);
            if (lastStr === sliceStr) {
                count++;
            } else {
                result += count > 1 ? count + lastStr : lastStr;
                lastStr = sliceStr;
                count = 1;
            }
        }

        // 마지막 남은 문자열 처리
        result += count > 1 ? count + lastStr : lastStr;
        
        return result.length
    }
    
    for(let i = 1 ; i <= Math.trunc(s.length/2) ; i++){
       const compressStringLength = compressString(s,i);
       answer = Math.min(answer, compressStringLength)
    }
  
    return answer;
}
