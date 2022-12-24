def solution(n):
    answer = 0
    answer = n ** (1/2)
    if int(answer) == answer:
        answer = (answer + 1)**2
    else:
        answer = -1
    return answer