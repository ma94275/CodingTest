function solution(a, b) {
    var answer = 0;
    const max = a>b ? a:b;
    const min = a<b ? a:b;
    for(let i = min; i <= max; i++)
        answer += i;
    return answer;
}