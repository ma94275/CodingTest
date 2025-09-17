**다른 사람의 풀이**

- x에 i를 곱한다
```js
function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(x*i)
    }
    return answer;
}
```

- 축약 시킨 코드
```js
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
```