'''
	시작 행은 left  / n
    시작 열은 left % n
    행 변경 기준  : 열 값이 n 일 때
    반복 횟수 right - left + 1
  	열과 행 중 더 큰 값이 요소의 값이 됨
'''
def solution(n, left, right):
    answer = []
    row = left // n # 시작행
    col = left % n  # 시작열
    number = right - left + 1 #반복횟수
    for i in range(number):
        if col == n : # 행 변경 기준
            col = 0
            row += 1
        value = row + 1 if row > col else col + 1 #행과 열의 인덱스 중 큰 값이 선택됨
        answer.append(value)
        col += 1
    return answer