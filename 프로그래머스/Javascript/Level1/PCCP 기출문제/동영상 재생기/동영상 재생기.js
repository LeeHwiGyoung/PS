function solution(video_len, pos, op_start, op_end, commands) {
  //'mm:ss'의 입력을 초 단위로 바꿔주는 함수
  function change_format_to_sec(time) {
    return Number(time.slice(0, 2)) * 60 + Number(time.slice(-2));
  }
  //sec 단위의 입력을 "mm:ss"의 형식으로 바꿔주는 함수
  function change_format_to_time(total_sec) {
    let min = Math.floor(total_sec / 60);
    let sec = total_sec % 60;
    return `${String(min).padStart(2, 0)}:${String(sec).padStart(2, 0)}`;
  }

  //op_start <= pos <= op_end 면 pos 를 op_end로 이동시키는 함수
  function op_skip(pos, op_start, op_end) {
    if (op_start <= pos && pos <= op_end) {
      return op_end;
    }
    return pos;
  }

  function move(pos, command, interval, video_time) {
    //next prev
    if (command === "next" && video_time >= pos + interval) {
      // command 가 next고  move 이후가 비디오 총 길이보다 작거나 같은 경우
      pos += interval;
    } else if (command === "next" && video_time < pos + interval) {
      //command가 next고 move 이후가 비디오 총 길이보다 큰 경우
      pos = video_time;
    } else if (command === "prev" && 0 > pos - interval) {
      //command가 prev이고 move 이후가 0보다 작은 경우
      pos = 0;
    } else {
      //command가 prev이고 0보다 큰 경우
      pos -= interval;
    }
    return pos;
  }

  const video_sec = change_format_to_sec(video_len);
  const op_start_sec = change_format_to_sec(op_start);
  const op_end_sec = change_format_to_sec(op_end);
  let cur_sec = change_format_to_sec(pos);

  cur_sec = op_skip(cur_sec, op_start_sec, op_end_sec);

  commands.forEach((command) => {
    cur_sec = move(cur_sec, command, 10, video_sec);
    cur_sec = op_skip(cur_sec, op_start_sec, op_end_sec);
  });
  return change_format_to_time(cur_sec);
}
