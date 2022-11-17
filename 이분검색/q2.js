function solution(nums, n) {
  let answer = 0
  function count(len) {
    let cnt = 0;
    for (let x of nums) {
      cnt += Math.floor(x / len)
    }
    return cnt
  }
  let lt = 1
  let rt = Math.max(...nums)
  while(lt <= rt) {
    let mid = parseInt((lt + rt) / 2)
    if (count(mid) >= n) {
      answer = mid;
      lt = mid + 1
    } else {
      rt = mid - 1
    }
  }
  return answer
}

console.log(solution([802, 743, 457, 539], 11))