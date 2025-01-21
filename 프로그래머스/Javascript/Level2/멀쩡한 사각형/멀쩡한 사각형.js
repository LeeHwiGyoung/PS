function solution(w, h) {
    const getGcd = (a , b) => {
        return b === 0 ? a : getGcd(b, a % b);
    }
    
    const gcd = getGcd(w,h);
    return w * h - (w + h - gcd)
}
