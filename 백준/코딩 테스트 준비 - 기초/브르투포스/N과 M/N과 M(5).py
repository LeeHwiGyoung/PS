def solution(cnt):
    for i in range(n):
        if cnt == m:
            for j in range(cnt):
                print(arr[j], end = " ")
            print()
            return
        if visit[i] == False:
            arr[cnt] = numbers[i]
            visit[i] = True
            solution(cnt+1)
            visit[i] = False

n , m = map(int , input().split())
numbers = list(map(int,input().split()))
visit = [False for _ in range(n)]
arr = [0 for _ in range(n)]
numbers.sort()
solution(0)