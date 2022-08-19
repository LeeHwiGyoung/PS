class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Queue {
    constructor(){
        this.head = null;
        this.rear = null;
        this.length = 0;
    }
    enqueue(data) {
        const node = new Node(data);
        if (!this.head) {
        this.head = node;
        }
        else {
        this.rear.next = node;
        }
        this.rear = node;
        this.length++;
    }  
    dequeue(){
        if(!this.head){
            return false;
        }
        const data  =this.head.data;
        this.head = this.head.next;
        this.length --;
        return data;
    }
}

function solution(queue1, queue2) {
    let answer = 0;
    let queue1_sum = 0;
    let queue2_sum = 0;
    let avg;
    let element;
    const q1 = new Queue();
    const q2 = new Queue();
    for(let i = 0 , max = queue1.length  ; i < max ; i++){
        queue1_sum += queue1[i];
        q1.enqueue(queue1[i]);
        q2.enqueue(queue2[i]);
        queue2_sum += queue2[i];
    }
    if((queue1_sum + queue2_sum)%2 == 1)
        return -1;
    avg = (queue1_sum + queue2_sum) / 2;
    while(answer <= 600000){
        if(queue1_sum > avg){ 
            element = q1.dequeue(); 
            q2.enqueue(element); 
            queue1_sum -= element; 
            answer ++;
        }
        else if(queue1_sum < avg){
            element = q2.dequeue(); 
            q1.enqueue(element);; 
            queue1_sum += element;
            answer ++;
        }
        else{
            return answer;
        }
    }
    return -1;
}
