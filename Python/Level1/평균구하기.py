def solution(arr):
    answer = 0
    for el in arr:
        answer += el
    answer /= len(arr)
    return answer