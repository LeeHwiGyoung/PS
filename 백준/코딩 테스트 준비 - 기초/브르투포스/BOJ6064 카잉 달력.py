def solution(m, n, x, y):
    answer = -1
    years = x
    while True:
        if years > m * n :  # 마지막 해보다 커지면
            break
        if years % n  == y % n:  # 조건에 맞는 해에 도달  y % n 인 경우 years % n 이 n이면 %값 계산으로 0이 나오기 때문에
            answer = years
            break
        years += m
    return answer


test_num = int(input())
for _ in range(test_num):
    m, n, x, y = map(int, input().split())
    result = solution(m, n, x, y)
    print(result)
