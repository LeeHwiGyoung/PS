

function solution(friends, gifts) {
    let maxReceive = 0;
    const giftMap = {}
    
    friends.forEach((friend)=> {
        giftMap[friend] = {total : 0}; //선물지수 계산
        friends.forEach(otherFriend => { //서로 주고 받았는지 확인
            if (friend !== otherFriend) {
                giftMap[friend][otherFriend] = 0;
            }
        });
    })
    
    gifts.forEach((gift)=> {
        const [sender , receiver] = gift.split(" ");
        giftMap[sender][receiver] += 1;
        giftMap[sender].total += 1;
        giftMap[receiver].total -= 1;
    })
    for(const friend of Object.keys(giftMap)){
        let gift = 0;
        for(const others of Object.keys(giftMap[friend])){
            if(others === 'total'){
                continue;
            }
            if(giftMap[friend][others] > giftMap[others][friend] || 
                (giftMap[friend][others] === giftMap[others][friend] && giftMap[friend].total > giftMap[others].total)){
                gift ++;
            }
        }    
        maxReceive = Math.max(maxReceive, gift)
    }

    return maxReceive;
}
