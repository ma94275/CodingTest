## 다른 사람의 풀이

**replace함수**
- 아스키코드로 변환하지 않아도 비교할 수 있음
```js
function solution(myString) {
    var answer = '';
    for(let i = 0; i < myString.length; i++) {
        if(myString[i] < "l") {
            myString = myString.replace(myString[i], "l");
        }
    }
    answer = myString
    return answer;
}
```