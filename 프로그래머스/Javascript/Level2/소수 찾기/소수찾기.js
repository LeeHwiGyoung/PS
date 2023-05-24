const isPrime = (num) => {
    if (num < 2) // 0 or 1이면
        return false;
    if (num === 2) 
        return true;
    for (var i = 2; i <= Math.sqrt(num); i++) { //제곱근을 기준으로 곱이 대칭적으로 일어남 
        if (num%i===0) return false; 
    }
    return true;
}


const per = (n , r , perCheck, numArr , perArr ,prime) => {
    if(perArr.length == r){
        const resultNum = Number(perArr.join(''));
        if(!prime.has(resultNum) && isPrime(resultNum)){ //and연산자 단축 평가 (중복부터 판단)   
            prime.add(resultNum);
        }
        return;
    }
    for(let i = 0 ; i < numArr.length ; i++){
        if(perCheck[i] === 0){
            perArr.push(numArr[i]);
            perCheck[i] = 1;
            per(i , r , perCheck, numArr,perArr,prime);
            perCheck[i] = 0;
            perArr.pop(numArr[i]);
        }
    }
}

function solution(numbers) {
    let numArr  = [];
    let prime = new Set();
    let perCheck = new Array(numbers.length).fill(0);
    for (let i = 0 ; i < numbers.length ; i++){
        numArr.push(numbers[i]);
    }
    for(let i = 1 ; i <= numArr.length ; i++){
        per( 0 , i , perCheck , numArr , [] , prime);    
    }

    return prime.size;
}