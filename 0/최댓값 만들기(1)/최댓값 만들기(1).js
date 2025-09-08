function solution(numbers) {
    var answer = 0;
    let max = numbers;
    for(let i = 0; i < max.length; i++){
        for(let j = 0; j < numbers.length; j++){
            if(i != j)
                if(answer < max[i] * numbers[j])
                    answer = max[i] * numbers[j];
        }
    }
    return answer;
}