function solution(a, b) {
    let day = ["THU","FRI", "SAT", "SUN", "MON", "TUE", "WED"]; //배열의 인덱스를 %로 사용
    let month = [31,29,31,30,31,30,31,31,30,31,30,31]; // 1 ~ 12월 일자
    let gap = 0;
    if( a === 1)
        gap = b;
    else{
        for(let i = 0 ; i < a - 1; i++)
            gap += month[i];
        gap += b;
    }
    return day[gap % 7];
}
