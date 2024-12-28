function solution(bandage, health, attacks) {
    let curHealth = health;
    let curTime = 1;
    let successfulBandageTime = 0;
    let attackIdx = 0;
    const lastTime = attacks[attacks.length - 1][0];
    const [bandageTime, perSecondHeal, bonusHeal] = bandage;

    const heal = (amount) => {
        curHealth = Math.min(curHealth + amount, health);
    };

    const takeDamage = (damage) => {
        curHealth -= damage;
        successfulBandageTime = 0; // 공격받으면 연속 성공 초기화
        return curHealth <= 0;
    };
    
    while(curTime <= lastTime){
        if(curTime === attacks[attackIdx][0]){
            takeDamage(attacks[attackIdx][1])
            if(curHealth <= 0){
                return -1
            }
            attackIdx ++;
        }else {
            heal(perSecondHeal)
            successfulBandageTime ++;
            if(successfulBandageTime === bandageTime){
                heal(bonusHeal);
                successfulBandageTime = 0;
            }
        }
        curTime ++;
    }
    
    return curHealth;
}
