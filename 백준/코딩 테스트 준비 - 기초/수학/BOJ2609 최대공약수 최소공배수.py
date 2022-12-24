'''
 유클리드 호제법 사용
 항상 b보다 큰 a가 있을 때
 아래를 반복
     a가 b로 나눠지지 않으면 a를 b로 나눈 나머지 값을 저장
     a가 b로 나눠지면 그 값이 최대 공약수
 최소공배수 = 두수의 곱  / 최대공약수
'''
def GCD (a : int, b : int ) :  #최대공약수
    if a % b == 0:
        return b
    else:
        return GCD(b, a % b)



a , b = map(int , input().split()) # 24 18
gcd = GCD(a, b)
lcm =  int(a * b / gcd)
print(gcd)
print(lcm)
