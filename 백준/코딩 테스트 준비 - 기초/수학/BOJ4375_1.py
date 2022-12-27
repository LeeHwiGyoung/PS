'''
import re
정규식 사용 = 시간초과
num = int(input()) # 3 => 111 7  => 111111 9901 =>111111111111
p = re.compile('[1]+')
time = 1
while True:
    mul =  num * time
    mul = str(mul)
    result = p.match(mul)
    if result !=  None:
        if result.span()[1] == len(mul):
            print(len(mul))
            break
    time += 1

'''
num = int(input())
sum = 0

for i in range(num+1):
    if i == 0:
        continue
    if num % i == 0:
        sum += i

each =  (sum ) * num * 0.5

print(each)