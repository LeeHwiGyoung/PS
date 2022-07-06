function solution(nums) {
    var answer = 0;
    let pokemon = new Set(nums); // SET의특징사용
    let len = nums.length / 2;
    if(len < pokemon.size) 
        answer = len;
    else
        answer = pokemon.size;
    return answer;
}
