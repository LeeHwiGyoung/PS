def solution(n):
    answer = 0
    answer = list(str(n))
    answer.sort(reverse = True)
    answer = int("".join(answer))
    return answer