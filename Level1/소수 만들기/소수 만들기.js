function find_prime(num){ //에라토스테네스의 체 
    const prime = new Array(num + 1).fill(false,0,2).fill(true,2);
    for(let i = 2 ; i* i <= num ; i++){
        if(prime[i]){
            for(let j = i * i ; j <= num ; j += i)
                prime[j] = false;
        }
    }
    return prime;
}
function solution(nums) {
    let answer = 0;
    let max_sum = 0;
    let prime = []
    nums.sort((a,b) => a - b).reverse(); // 가장 큰 수 3개의 합까지만 소수를 판별하기 위해
    max_sum = nums[0] + nums[1] + nums[2];
    prime = find_prime(max_sum); //에라토스테네스의 체를 사용하여 소수 배열 생성
    for(let i = 0 ; i < nums.length - 2 ; i++){
        for(let j = i + 1 ; j < nums.length - 1; j++){
            for(let k = j + 1 ; k < nums.length ; k++){
                let sum = nums[i] + nums[j] + nums[k];
                if(prime[sum]){ //소수면
                    answer += 1;
                }
            }
        }
    }
    return answer;
}
