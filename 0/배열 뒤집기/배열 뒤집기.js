function solution(num_list) {
    var answer = [];
    let n = 0;
    for(let i = 0; i < num_list.length; ++i){
        ++n;
    }
    for(let i = 0; i < num_list.length; ++i){
        answer[i] = num_list[n-1];
        --n;
    }

    return answer;
}