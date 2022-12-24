def divideSum(num):
    result = 0
    while num > 0:
        result += num % 10
        num //= 10
    return result

def solution(x):
    num = divideSum(x)
    if x % num == 0:
        return True
    return False