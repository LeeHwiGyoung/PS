function solution(arrayA, arrayB) {
    let answer = 0;
    
    const gcd = (a, b) => {
        return b === 0 ? a : gcd(b , a % b);
    }
    
    const arrayGcd = (array) => {
        let result = array[0];
        for(let i = 1 ; i < array.length ; i++){
            result = gcd(result , array[i]);
            if(result === 1){ //서로수인 수가 있으면 
                return 0
            }
        }
        return result;
    }
    
    const isValid = (gcd , array) => {
        for(let i = 0 ; i <array.length ; i++){
            if(array[i] % gcd === 0){
                return false;
            }
        }
        return true
    }
    
    const gcdA = arrayGcd(arrayA)
    const gcdB = arrayGcd(arrayB)
    
    const validA = isValid(gcdA , arrayB) ? gcdA : 0;
    const validB = isValid(gcdB, arrayA) ? gcdB : 0;
    
    return Math.max(validA, validB);
}
