//https://school.programmers.co.kr/learn/courses/30/lessons/181888

function solution(num_list, n) {
    var answer = [];
    answer = num_list.filter((el , idx ) => !(idx % n));
    return answer;
}