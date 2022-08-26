function solution(s) {
    var answer = '';

    answer = s.split(" ").map((str)=>str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).join(" ");

    return answer;
}
