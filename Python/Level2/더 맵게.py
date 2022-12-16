'''
 k 보다 작은 배열 (under_k), 큰 배열(upper_k) 로 나눈다

 under_k이 빈 경우 answer 값 리턴 => 반복문 탈출 조건 1

 under_k의 길이가 1인 경우
    upper_k가 empty면 -1 리턴 => 반복문 탈출 조건 2
    empty가 아니면 answer + 1리턴 => 반복문 탈출 조건 3

 under_k이 길이가 2이상인 경우
    가장 작은 값 first와 그 다음 second를 pop하여 계산(mix)
    mix가 k보다 크면 큰 배열로 작으면 작은 배열로 넣는다

'''
import heapq


def find_idx(arr, value):
    idx = len(arr)
    for i in range(len(arr)):  # K와 같은 값이 없는 경우도 존재해서 binarySearch x
        if arr[i] >= value:
            idx = i
            return idx
    return idx


def solution(scoville, K):
    answer = 0
    scoville.sort()
    idx = find_idx(scoville, K)
    upper_k = scoville[idx:]  # scoville 지수가 K보다 높은 경우
    under_k = scoville[:idx]  # scoville 지수가 k보다 낮은 경우
    heapq.heapify(under_k)  # minheap

    while 1:
        if not under_k:  # 반복문 탈출 조건 1
            return answer
        elif len(under_k) == 1:
            if not upper_k:
                return -1  # 반복문 탈출 조건 2
            else:
                return answer + 1  # 반복문 탈출 조건 3
        else:
            first = heapq.heappop(under_k)
            second = heapq.heappop(under_k)
            mix = first + second * 2
            if mix < K:
                heapq.heappush(under_k, mix)
            else:
                upper_k.append(mix)
            answer += 1
