/*
diffs 퍼즐의 난이도 times = {time_cur: 현재 펴즐 소요 시간 ,time_prev = 이전 퍼즐 소요시간 ,level = 숙련도} limit
level에 따라 퍼즐을 풀 때 틀리는 횟수가 바뀜
diff <= level :  퍼즐을 안 틀리고 time_cur 소요
diff > level  : diff-level 만큼 퍼즐을 틀리며 틀릴 때 마다 time_cur 소요 + time_prev 만큼 이 전 퍼즐을 풀고 와야 한다. 단 이미 푼 퍼즐은 틀리지 않는다.

diff 가 어려운 순서로 풀게 되면 쉬운 것은 한 번에 풀 수 있게 됨
시간복잡도는 nlogN을 넘으면 안 됨 => 이진 탐색 사용
*/
function solution(diffs, times, limit) {
  function check(level) {
    let prev_time = 0;
    let sum = 0;
    const len = diffs.length;
    for (let i = 0; i < len; i++) {
      let cur = times[i];
      if (diffs[i] > level) {
        cur += (diffs[i] - level) * (prev_time + cur);
      }
      prev_time = times[i];
      sum += cur;
    }
    if (sum > limit) {
      return false;
    }
    return true;
  }

  let start = 1;
  let end = diffs.reduce((a, c) => Math.max(a, c), -Infinity);
  let target = end;

  if (check(1)) return 1;

  while (start + 1 < end) {
    const mid = parseInt((start + end) / 2);
    if (check(mid)) {
      end = mid;
      target = mid;
    } else {
      start = mid;
    }
  }

  return target;
}
