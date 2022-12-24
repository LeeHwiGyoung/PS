from collections import deque


def solution(prices):
    answer = []
    prices = deque(prices)

    while prices:
        time = 0
        check = prices.popleft()
        for value in prices:
            time += 1
            if check > value:
                break
        answer.append(time)

    return answer