# TodayILeanred

## 221116 <br>
**정렬 Q6** 이진수 정렬에서 `cnt += (tmp % 2)`와 `tmp = parseInt(tmp / 2)` 부분에 대한 코드 해석

`tmp % 2`는 나머지가 1이거나 0으로 나온다. 쉽게 말해서 그 부분이 해당 수를 이진수로 표현했을 때 0과 1의 개수가 될 수 있다.

`parseInt(tmp / 2)`는 첫 번째 숫자 5를 예로 들면 처음 5를 2로 나눈 나머지는 1이 된다. 그래서 cnt에 +1을 하고, `parseInt(tmp / 2)`를 통해서 2가 된다. (5 / 2 = 2.5이므로) 2를 다시 2로 나누면 나머지는 0이다. 결과적으로 1이 되고, 1을 도 다시 2로 나누면 나머지는 1이고, 그 1을 2로 또 다시 나누게 되면 정수가 아닌 수가 되기 때문에 while문이 끝난다. 숫자 5의 이진수는 101이기 때문에 해당 식 두 개를 통해서 1, 0, 1을 도출해냈다.

**이분 검색 Q2, Q3**

* `Math.floor()`: 주어진 숫자를 **내림**해 정수를 반환
* `Math.ceil()`: 주어진 숫자를 **올림**해 정수를 반환

**이분 검색 Q4**

`.reduce()` 대상 배열의 길이만큼 주어진 콜백을 실행, 마지막에 호출되는 콜백의 반환 값을 반환. 각 콜백의 반환 값은 다음 콜백으로 전달된다.