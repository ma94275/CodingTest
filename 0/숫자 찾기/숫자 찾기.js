function solution(num, k) {
    var answer = [];
    num = String(num);
    answer = num.split("");
    for(let i = 0; i < answer.length; i++){
        if(k == (answer[i]))
            return i+1;      
    }
    return -1;
}