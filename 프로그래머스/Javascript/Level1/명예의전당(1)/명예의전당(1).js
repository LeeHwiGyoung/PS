  class MinHeap {
  constructor() {
    this.heap = [];
  }
    
  length() {
      return this.heap.length;
  }
    
  top() {
     return this.heap[0];
  }
    
  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.isEmpty()) return null;

    const root = this.heap[0];
    const lastNode = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = lastNode;
      this.heapifyDown();
    }

    return root;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  heapifyUp() { //push 때 minheap을 유지하는 자리를 찾아감
    let index = this.heap.length - 1;
    while (index > 0) { //루트까지
      const parentIndex = Math.floor((index - 1) / 2); //부모의 인덱스
      if (this.heap[parentIndex] <= this.heap[index]) break; //부모가 더 작으면
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index],this.heap[parentIndex],]; //아니면 스왑
      index = parentIndex;
    }
  }

  heapifyDown() { //pop 후에도 minheap을 유지하기 위해
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let smallest = index;
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] < this.heap[smallest]
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] < this.heap[smallest]
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }
}

function solution(k, score) {
    const minheap = new MinHeap();
    const answer = [];
    
    for(let i = 0 ; i < score.length ; i++){
        const cur_score = score[i];
      
        if(minheap.length() < k){
            minheap.push(cur_score);
        }
        else if(minheap.length() >= k && minheap.top() < cur_score){
            minheap.pop();
            minheap.push(cur_score);
            
        }
        const min = minheap.top()
        answer.push(min)   
    }
    return answer;
}
