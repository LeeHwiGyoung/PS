def solution(k, tangerine):
    answer = 0
    cnt = 0
    tanger = {}
    for weight in tangerine:
        if weight in tanger: #무게를 키로 사용
            tanger[weight] = tanger.get(weight) + 1
        else:
            tanger[weight] = 1
    for key, value  in sorted(tanger.items(), key = lambda item:item[1] ,reverse = True):
        if cnt < k:
            cnt += value
            answer += 1
    return answer