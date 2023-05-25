function solution(n, wires) {
    var answer = 100; // 100개의 노드가 최대
    let tree = Array.from(Array(n+1) , () => []); //tree 초기설정
    
    wires.forEach((item)=> { //주어진 값에 따라 트리 설정 
        const [i , j ] = item;
        tree[i].push(j);
        tree[j].push(i);
    })
   
    const searchTree = (root , except) => {
        let cnt = 0; //노드 방문 횟수
        let visit = new Array(n+1).fill(false); //방문을 확인할 배열
        const queue = [root]; 
        visit[root] = true; 
        while(queue.length > 0){
            const cur = queue.pop();
            tree[cur].forEach((nextNode)=> { //현재 노드에서 연결된 노드들
                if(nextNode !== except && visit[nextNode] === false){ 
                    visit[nextNode] = true;
                    queue.push(nextNode);
                }
            })
            cnt ++;
        }  
    return cnt;
    }

    wires.forEach((item)=> {
        const [i , j] = item;
        const diff = Math.abs(searchTree(i, j) - searchTree(j, i));
        if (diff < answer){
             answer = diff
        }
    })
    
    return answer;
}