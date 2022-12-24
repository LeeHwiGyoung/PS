def remain(a , b, c):
    print((a + b) % c)
    print(((a%c) + (b%c)) % c)
    print((a * b) % c)
    print(((a%c) * (b%c)) % c)

a, b, c = map(int , input().split())
remain(a,b,c)
