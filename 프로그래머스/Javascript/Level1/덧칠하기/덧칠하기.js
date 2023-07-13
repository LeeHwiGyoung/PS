function solution(n, m, section) {
  let answer = 0;  
  let part = 0;

  section.forEach((n) => {
    if (n > part) {   // 현재 구역이 현재까지 칠한 구역보다 크다면
      part = n + m - 1; // 구역을 칠해주고 현재까지 칠한 구역을 업데이트 시켜준다.
      answer++;// 페인트를 칠했으니 1증가 시킨다.
    }
  });

  return answer;

}