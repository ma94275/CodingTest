function solution(box, n) {
    let answer = [];
    let m = 1;
    for(let i = 0; i < box.length; i++)
        answer.push(Math.floor(box[i] / n));
    for(let i = 0; i < answer.length; i++)
        m *= answer[i];
    return m;
}