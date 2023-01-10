def solution(cnt, idx):
    for i in range(idx , n):
        if cnt == m:
            for j in range(cnt):
                print(arr[j], end = " ")
            print()
            return
        if visit[i] == False:
            arr[cnt] = numbers[i]
            visit[i] = True
            solution(cnt+1 ,i)
            visit[i] = False

n , m = map(int , input().split())
numbers = list(map(int,input().split()))
visit = [False for _ in range(n)]
arr = [0 for _ in range(n)]
numbers.sort()
solution(0 , 0)