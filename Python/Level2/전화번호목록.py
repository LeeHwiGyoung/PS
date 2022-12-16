def solution(phone_book):
    answer = True
    phone_book.sort(key = lambda x : len(x)) #길이 순으로 정렬
    phone_dic = dict.fromkeys(phone_book) # list로부터 dict 선언
    for phone_number in phone_book:
        for idx in range(len(phone_number) - 1): #phone_number 와 동일한 String을 제외한 subStr을 확인하기 위함
            subStr = phone_number[0:idx+1] #subStr
            if subStr in phone_dic: #subStr이 dic에 존재하면 현재 번호가 다른 번호의 접두어가 됨
                answer = False #따라서 answer의 값이 False
                break
    return answer