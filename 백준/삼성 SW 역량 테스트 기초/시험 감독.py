from math import ceil

N = int(input()) #시험장 수
a = list(map(int,input().split())) #응시자수
b , c = map(int,input().split()) #b 총 감독관이 감시 가능한 응시자 수 c 부 감독관이 감시 가능한 수
result = 0

for people in a:
    if people <= b:
        result += 1
    else:
        result += ceil((people - b) / c) + 1;

print(result)
