num = int(input())
cnt = 0
i = 1
while i <= num:
  cnt += num - i + 1
  i *= 10

print(cnt)
