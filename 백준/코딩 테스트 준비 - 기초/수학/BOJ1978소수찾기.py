num = int(input())
prime = list(map(int, input().split()))
standard = 1001 #자연수 범위
cnt = 0 #인풋 중 소수의 수
eratosthenes = [True for _ in range(standard)] #소수를 구해둘 배열 에라토스테네스의 체 사용 초기엔 모두를 소수라고 생각
eratosthenes[0] = False # 0 은 자연수 x
eratosthenes[1] = False # 1은 소수가 x
for i in range(2, standard//2): #2부터
    if eratosthenes[i] == True: #소수이면
        for j in range(i*i, standard, i): #그 다음 배수부터는 소수가 아님
            eratosthenes[j] = False

for i in range(len(prime)):
    if eratosthenes[prime[i]] == True:
        cnt += 1

print(cnt)


