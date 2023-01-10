def solution(cnt ,idx):
    for i in range(idx, n):
        if cnt == m:
            for j in range(cnt):
                print(arr[j], end = " ")
            print()
            return
        arr[cnt] = numbers[i]
        solution(cnt+1 ,i )

n , m = map(int , input().split())
numbers = list(map(int,input().split()))
arr = [0 for _ in range(n)]
numbers.sort()
solution(0 , 0)