function solution(x, n) {
    var answer = [];
    let m = 0;
    for(let i = 0; i < n; i++){
        m += x;
        answer.push(m);
    }
    return answer;
}