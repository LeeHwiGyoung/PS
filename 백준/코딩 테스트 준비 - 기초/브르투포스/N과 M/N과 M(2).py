def solution(cnt , n , m , arr , idx):
    for i in range(idx, n+1):
        if cnt == m:
            for j in range(m):
                print(arr[j], end=" ")
            print()
            return
        if visit[i] == False:
            visit[i] = True
            arr[cnt] = i
            solution(cnt + 1, n, m , arr , i)
            visit[i] = False




n , m  = map(int, input().split())
visit = [False for _ in range(n + 1)]
arr = [ 0 for _ in range(m)]
solution(0 , n , m , arr , 1)