function solution(n, costs) {
    var answer = 0;
    let parent = Array.from({length : n} , (el ,idx) => el = idx)

    costs.sort((a,b) => a[2] - b[2]) //가격이 낮은 순서대로 정렬
    
    const find_parent = (parent , x) => {
        if(parent[x] !== x){ //부모가 자기 자신이 아니면
            parent[x] = find_parent(parent, parent[x]); // 재 탐색
        }
        return parent[x];
    }
    
    const union = (v1, v2) => { 
        const v1_parent = find_parent(parent, v1);
        const v2_parent = find_parent(parent, v2);
        if(v1_parent > v2_parent){
            parent[v1_parent] = v2_parent; //부모의 노드값을 바꿔줌 
        }else{
            parent[v2_parent] = v1_parent;
        }
    }
    
    for(let i = 0 ; i < costs.length ; i++){
        const [v1, v2 , w] = costs[i];
        if(find_parent(parent,v1) !== find_parent(parent,v2)){
            union(v1, v2);
            answer += w;
        }
    }
    return answer;
}
