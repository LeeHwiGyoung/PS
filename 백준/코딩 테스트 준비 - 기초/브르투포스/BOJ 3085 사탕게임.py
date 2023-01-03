import copy

def swap(x, y , nx ,ny):
    copy_candy = copy.deepcopy(candy)
    temp = copy_candy[x][y]
    copy_candy[x][y] = copy_candy[nx][ny]
    copy_candy[nx][ny] = temp
    return copy_candy

def check(copy_candy , n):
    max_cnt = 1
    for i in range(n): #열 검색
        cnt = 1
        for j in range(1,n):
            if copy_candy[i][j] != copy_candy[i][j-1] :
                cnt = 1
                continue
            else:
                cnt += 1
            if cnt > max_cnt:
                max_cnt = cnt
        cnt = 1
        for j in range(1,n):
            if copy_candy[j][i] != copy_candy[j-1][i]:
                cnt = 1
                continue
            else:
                cnt += 1
            if cnt > max_cnt:
                max_cnt = cnt

    return max_cnt

n = int(input())
result = 0
candy = []
for _ in range(n):
    candy.append(list(input()))

for i in range(n):
    for j in range(n): #선택
        if j + 1 < n:
            if candy[i][j] == candy[i][j+1]:
                continue
            copy_candy = swap(i,j , i , j+1)
            cnt = check(copy_candy, n)
            if cnt > result:
                result = cnt

        if i + 1 < n:
            if candy[i][j] == candy[i+1][j]:
                continue
            copy_candy = swap(i, j, i+1, j)
            cnt = check(copy_candy, n)
            if cnt > result:
                result = cnt

print(result)
