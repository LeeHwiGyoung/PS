def solution(cnt , n , m , arr,idx):
    for i in range(idx, n+1):
        if cnt == m:
            for j in range(m):
                print(arr[j], end=" ")
            print()
            return

        arr[cnt] = i
        solution(cnt + 1, n, m , arr ,i)




n , m  = map(int, input().split())
arr = [ 0 for _ in range(m)]
solution(0 , n , m , arr ,1)