class MinHeap {
  constructor() {
      this.heap = [];
  }
  
  push(value) {
      this.heap.push(value);
      this.bubbleUp(); //heap 유지
  }
  
  pop() {
      if(this.heap.length === 1) return this.heap.pop();
      const min = this.heap[0]; //루트의 최솟값을 저장
      this.heap[0] = this.heap.pop(); // 마지막 노드 값을 루트에 저장 
      this.bubbleDown();
      return min;
  }
  
  peek() {
      return this.heap[0]; //최소값 리턴
  }
  
  size() {
      return this.heap.length;// heap size 반환
  }
  
  bubbleUp() {
      let index = this.heap.length - 1;
      while(index > 0){
          let parentIndex = Math.floor((index - 1) / 2);
          if(this.heap[parentIndex] <= this.heap[index]){ //부모노드가 더 작으면
              break; 
          }
          [this.heap[parentIndex] , this.heap[index]] = [this.heap[index] , this.heap[parentIndex]]; //부모 노드와 스왑하여 힙 유지
          index = parentIndex;
      }
  }
  
  bubbleDown() {
      let index = 0;
      const length = this.heap.length;
      while(true){
          let leftIndex = 2 * index + 1;
          let rightIndex = 2 * index + 2;
          let smallest = index;
          
          if(leftIndex < length && this.heap[leftIndex] < this.heap[smallest]){
              smallest = leftIndex;
          }
          
          if(rightIndex < length && this.heap[rightIndex] < this.heap[smallest]){
              smallest = rightIndex;
          }
          if(smallest === index){ 
              break
          }; // 현재가 최소값을 유지하기 때문
          [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
          index = smallest;
      }
  }
}

class MaxHeap extends MinHeap {
  push(value){
      super.push(-value); //음수로 저장하여 최대값이 최소값이 되어 루트에 저장되게 함
  }
  
  pop() {
      return -super.pop();
  }
  
  peek() {
      return -super.peek();
  }
}

class DualPriorityQueue {
  constructor() {
      this.minHeap = new MinHeap();
      this.maxHeap = new MaxHeap();
      this.entryMap = new Map();
  }
  
  insert(value) {
      this.minHeap.push(value);
      this.maxHeap.push(value);
      this.entryMap.set(value, (this.entryMap.get(value) || 0) + 1);
  }
  
  deleteMaxValue() {
      if(this.entryMap.size <= 0){
          return
      }
      while(this.maxHeap.size() > 0 && !this.entryMap.get(this.maxHeap.peek())){ //maxHeap 에서 유효값을 찾을 때까지 pop minHeap을 통해 삭제한 경우 heap에는 존재하나 entryMap에는 존재 x
         this.maxHeap.pop(); 
      } 
      if(this.maxHeap.size() > 0){ //유효값을 찾으면
          const maxValue = this.maxHeap.pop();
          this.entryMap.set(maxValue , this.entryMap.get(maxValue) - 1);
          if(this.entryMap.get(maxValue) === 0) {  
              this.entryMap.delete(maxValue)
          }
      }        
  }
  
  deleteMinValue() {
      if(this.entryMap.size <= 0){
          return
      }
      
      while(this.minHeap.size() > 0 && !this.entryMap.get(this.minHeap.peek())){
          this.minHeap.pop();
      }
      
      if(this.minHeap.size() > 0){
          const minValue = this.minHeap.pop();
          this.entryMap.set(minValue , this.entryMap.get(minValue) - 1);
          if(this.entryMap.get(minValue) === 0){
              this.entryMap.delete(minValue)
          }
       }
  }
  getMin() {
      while(this.minHeap.size() > 0 && !this.entryMap.get(this.minHeap.peek())){
          this.minHeap.pop();
      }
      return this.minHeap.size() > 0 ? this.minHeap.peek() : null;
  }
  
  getMax() {
      while(this.maxHeap.size() > 0 && !this.entryMap.get(this.maxHeap.peek())){
          this.maxHeap.pop();
      }
      return this.maxHeap.size() > 0 ? this.maxHeap.peek() : null;
  }
  
  size() {
      return this.entryMap.size;
  }
}
function solution(operations) { 
  let answer = [];
  const dualPriorityQueue = new DualPriorityQueue();
  
  operations.forEach((op) => {
      const [command, number] = op.split(' ');
      const value = Number(number); //형 변환
      if(command === "I"){
          dualPriorityQueue.insert(value);
      }else if(command === "D"){
          if(value === 1){
              dualPriorityQueue.deleteMaxValue()
          }
          else if(value === -1){
              dualPriorityQueue.deleteMinValue()
          }
      }
  })
  
  dualPriorityQueue.size()  === 0 ? answer = [0, 0] : answer = [dualPriorityQueue.getMax() , dualPriorityQueue.getMin()]
  
  return answer;
}
