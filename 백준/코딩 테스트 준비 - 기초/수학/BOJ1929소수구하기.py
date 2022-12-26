min_num , max_num = map(int, input().split())
eratosthenes = [True for _ in range(max_num + 1)]
eratosthenes[0] = False
eratosthenes[1] = False

for i in range(2 , (max_num + 1)//2):
    if eratosthenes[i] == True :
        for j in range(i*i, max_num + 1, i):
            eratosthenes[j] = False

for i in range(min_num , max_num + 1):
    if eratosthenes[i] == True:
        print(i)