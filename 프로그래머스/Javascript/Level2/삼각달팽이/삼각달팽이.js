function solution(n) {
    const triangle = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));
    let [x, y] = [0, 0];  
    let count = 1;   
    let direction = 0;    // 0: 하, 1: 우측, 2: 상
    const totalNumbers = (n * (n + 1)) / 2;  // 채워야 할 총 숫자 개수
    
    while (count <= totalNumbers) {
        triangle[x][y] = count++; //할당 후 증가
        let nextX = x;
        let nextY = y;
        switch (direction) {
            case 0: // 아래로
                nextX = x + 1;
                if (nextX >= n || triangle[nextX][y] !== 0) { // 더 이상 아래로 움직일 수 없거나 다음 칸이 이미 움직인 칸이면
                    direction = 1; //오른쪽으로 이동
                    nextX = x;
                    nextY = y + 1;
                }
                break;
            case 1: // 오른쪽으로
                nextY = y + 1;
                if (nextY >= triangle[x].length || triangle[x][nextY] !== 0) { // 더 이상 오른쪽으로 움직일 수 없거나 이미 움직인 칸이면
                    direction = 2; // 위로 이동
                    nextX = x - 1;
                    nextY = y - 1;
                }
                break;
                
            case 2: // 위로
                nextX = x - 1;
                nextY = y - 1;
                if (nextX < 0 || nextY < 0 || triangle[nextX][nextY] !== 0) { // 더 이상 위로 갈 수 없거나 이미 움직인 칸이면
                    direction = 0; // 아래로 이동
                    nextX = x + 1;
                    nextY = y;
                }
                break;
        }
        x = nextX;
        y = nextY;
    }
    
    return triangle.flat();
}
