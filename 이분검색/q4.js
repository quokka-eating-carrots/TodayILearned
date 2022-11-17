function solution (board) {
  let answer = 0
  let n = board.length
  let lt = 1
  let rt = sum = 0
  board.forEach(e => {
    rt = Math.max(rt, Math.max(...e))
    sum += e.reduce((a, b) => a + b)
  })
  function count(m) {
    let cnt = 0
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < n; j += 1) {
        if (board[i][j] >= m) cnt += m
        else cnt += board[i][j]
      }
    }
    return cnt
  }
  while (lt <= rt) {
    let m = parseInt((lt + rt) / 2)
    if (count(m) >= (sum / 2)) {
      answer = m
      rt = m - 1
    } else {
      lt = m + 1
    }
  }
  return answer
}

console.log(solution([[2, 3, 1, 5, 6], 
  [3, 0, 7, 4, 3],
  [8, 5, 7, 5, 6],
  [9, 6, 1, 5, 5],
  [5, 5, 8, 5, 1]]))