def solution(cnt):
    for i in range(n):
        if cnt == m:
            for j in range(cnt):
                print(arr[j], end = " ")
            print()
            return
        arr[cnt] = numbers[i]
        solution(cnt+1)

n , m = map(int , input().split())
numbers = list(map(int,input().split()))
arr = [0 for _ in range(n)]
numbers.sort()
solution(0)