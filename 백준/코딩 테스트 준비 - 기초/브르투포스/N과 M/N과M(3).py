def solution(n,m, cnt):
    for i in range(1, n + 1):
        if cnt == m:
            for j in range(m):
                print(arr[j], end=" ")
            print()
            return
        arr[cnt] = i
        solution(n, m, cnt+1)


n , m  = map(int , input().split())
arr = [0 for _ in range(m)]
solution(n,m,0)