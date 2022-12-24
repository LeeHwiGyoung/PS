def judge(stack,str):
    str = str.lower()
    if str == 'p' or str == 'y': # p or y 일 때
        if len(stack) > 0 and stack[-1] != str:
            stack.pop()
        else:
            stack.append(str)

def solution(s):
    stack = []
    for i in range(len(s)):
        judge(stack, s[i])
    if len(stack) != 0:
        return False
    return True