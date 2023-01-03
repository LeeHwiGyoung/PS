'''
  0 < E < 16 , 0 < S < 29, 0 < M  < 20
'''
E , S , M = map(int, input().split())
cnt = 0

while True:
    check_E = cnt % 15 + 1
    check_S = cnt % 28 + 1
    check_M = cnt % 19 + 1
    if check_E == E and check_S == S and check_M == M:
        print(cnt + 1)
        break
    cnt += 1


