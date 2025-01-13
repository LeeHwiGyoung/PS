class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // 부모 노드와 자식 노드의 값을 비교하여 위치를 바꿔주는 메서드
  heapifyUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  // 부모 노드와 자식 노드를 비교하여 적절히 위치를 바꿔주는 메서드
  heapifyDown(index) {
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;
    let largest = index;

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]) {
      largest = leftChildIndex;
    }

    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]) {
      largest = rightChildIndex;
    }

    if (largest !== index) {
      [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
      this.heapifyDown(largest);
    }
  }

  // 힙에 값을 추가하는 메서드
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  // 루트 노드를 제거하고 반환하는 메서드
  extractMax() {
    if (this.heap.length === 0) return null;
    const max = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown(0);
    return max;
  }

  // 루트 노드만 확인하는 메서드
  peek() {
    return this.heap[0];
  }

  // 힙의 크기를 반환하는 메서드
  size() {
    return this.heap.length;
  }
}


function solution(n, k, enemy) {
    let answer = 0;
    const defend = new MaxHeap();
    for(let round = 0 ; round < enemy.length ; round++){
        const enemies = enemy[round];
        defend.insert(enemies)
        n-= enemies;
        if(n < 0){ // 막지 못하는 경우
            if(k){ // 무적권이 없으면
                const soldiers = defend.extractMax();
                n += soldiers; // 최대 값을 부활하여 더하고
                k--;
            }else{
                break;
            }
        } 
        answer ++;
    }
    return answer;
}
