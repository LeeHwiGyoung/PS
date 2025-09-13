class Node {
    constructor(value, parentNode = null){
        this.value = value;
        this.parentNode = parentNode;
        this.children = [];
        this.income = 0;
    }
    
    distributeIncome(price) {
        const paymentToParent = Math.floor(price * 0.1); //10%
        const remainIncome = price - paymentToParent;
        
        this.income += remainIncome;
        if(this.parentNode && remainIncome >= 1){
            this.parentNode.distributeIncome(paymentToParent); // 부모에게 전달
        }
    }
}

class Tree {
    constructor() {
        this.root = null;
        this.nodesMap = new Map();
    }
    
    add(value , parentValue) {
        const newNode = new Node(value);
        this.nodesMap.set(value , newNode);
        if(this.root == null) { //루트가 존재하지 않으면
            this.root = newNode; //루트로 
            return;
        }

        const parentNode = this.nodesMap.get(parentValue);
        if(parentNode) {
            newNode.parentNode = parentNode;
            parentNode.children.push(newNode);
        }
    }

    searchNode(value){
        return this.nodesMap.get(value);
    }
    
    processSale(sellerValue, price) {
        const sellerNode = this.searchNode(sellerValue);
        if(sellerNode) {
            sellerNode.distributeIncome(price);
        }
    }
}
    

function solution(enroll, referral, seller, amount) {
    const CENTER_VALUE = 'minho';
    const PRICE = 100;
    let answer = [];
    const groupTree = new Tree(); 
    groupTree.add(CENTER_VALUE, null); //minho 를 루트노드로 설정
    
    enroll.forEach((name , index) => { //enroll 배열을 돌며 referral의 값이 '-' 이라면 minho를 추천인으로 등록
        const parentValue = referral[index] === '-' ? 'minho': referral[index];
        groupTree.add(name , parentValue);
    })

    seller.forEach((sellerName, index) => { //seller 배열을 돌며 트리의 processSale 메서드를 호출
        const price = amount[index] * PRICE;
        groupTree.processSale(sellerName, price);
    })
    
    enroll.forEach((name) => { //각 판매원의 수익을 리턴하기 위함
        answer.push(groupTree.searchNode(name).income)
    })
    
    return answer;
}
