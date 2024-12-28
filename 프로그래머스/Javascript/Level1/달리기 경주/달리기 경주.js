function solution(players, callings) {
    var answer = [];
    const playerMap = new Map(players.map((player, rank) => [player, rank])) //등수 관리를 할 Map
    
    callings.forEach((calling) => {
        const currentRank = playerMap.get(calling);
        const prevPlayer = players[currentRank - 1];
        [players[currentRank - 1] , players[currentRank]] = [players[currentRank], players[currentRank-1]]; //배열 스왑
        playerMap.set(calling, currentRank - 1)
        playerMap.set(prevPlayer, currentRank)
        
    })
    return players
}
