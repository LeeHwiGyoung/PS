function solution(cards) {
    const visit = new Array(cards.length).fill(false);
    const result = [];
    
    const findGroupCard = (start) => {
        const cardList = [];
        let current = start;
        
        while (!visit[current]) { //방문 여부로 무한루프 방지
            visit[current] = true; 
            cardList.push(cards[current]); //카드 그룹화
            current = cards[current] - 1; // 참조하는 카드의 인덱스 갱신
        }
        
        return cardList.length;
    }
    
    for (let i = 0; i < cards.length; i++) {
        if (!visit[i]) {
            result.push(findGroupCard(i));
        }
    }
    
    result.sort((a, b) => b - a);
    
    return result.length <= 1 ? 0 : result[0] * result[1];
}
