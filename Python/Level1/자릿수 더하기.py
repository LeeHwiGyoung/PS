def solution(n):
    answer = 0
    standard = n
    while standard > 0:
        answer += standard % 10
        standard = standard // 10
    return answer