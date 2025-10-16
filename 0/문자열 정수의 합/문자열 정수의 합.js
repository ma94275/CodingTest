function solution(num_str) {
    var answer = [];
    let sum = 0;
    for(let i = 0; i < num_str.length; i++){
        answer.push((Number(num_str[i])));   
        sum += answer[i];
    }
    return sum;
}