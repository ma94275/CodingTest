function solution(my_string, num1, num2) {
    let answer = [];
    let temp = 0;
    for(let i = 0; i < my_string.length; i++)
        answer.push(my_string[i]);
    temp = answer[num1];
    answer[num1] = answer[num2];
    answer[num2] = temp;
    
    return answer.join('');
}