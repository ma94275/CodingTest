function solution(n)
{
    let answer = [];
    let sum = 0;
    answer = String(n).split("");
    for(let i = 0; i < answer.length; i++)
        sum += Number(answer[i]);

    return sum;
}