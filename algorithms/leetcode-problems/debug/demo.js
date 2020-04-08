/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    if(k < 0) return 0;
    let queue = [[0, 0]];
    let visited = new Array(m);
    for(let i = 0; i < m; i++) visited[i] = new Array(n).fill(false);
    visited[0][0] = true;
    let ans = 0;
    while(queue.length) {
        let len = queue.length;

        for(let i = 0; i < len; i++) {
            let [row, col] = queue.shift();
            ans++;
            if(row + 1 < m && !visited[row+1][col] && isValid(row+1, col)) {
                queue.push([row+1, col]);
                visited[row+1][col] = true;
            }
            if(row - 1 >= 0 && !visited[row-1][col] && isValid(row-1, col)) {
                queue.push([row-1, col]);
                visited[row-1][col] = true;
            }
            if(col + 1 < n && visited[row][col+1] && isValid(row, col+1)) {
                queue.push([row, col+1]);
                visited[row][col+1] = true;
            }
            if(col - 1 >= 0 && visited[row][col-1] && isValid(row, col-1)) {
                queue.push([row, col-1]);
                visited[row][col-1] = true;
            }
        }
    }

    return ans;

    function isValid(row, col) {
        let ans = 0;
        while(row > 0) {
            ans += row % 10;
            row = Math.floor(row/10);
        }
        while(col > 0) {
            ans += col % 10;
            col = Math.floor(col/10);
        }

        return ans <= k;
    }
};
console.log(movingCount(2, 3, 1));