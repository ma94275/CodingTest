function solution(sides) {
    var answer = 0;
    for(let i = 0; i < sides.length; i++)
        for(let j = 0; j < sides.length; j++)
            if(sides[i] < sides[j]){
                answer = sides[i];
                sides[i] = sides[j];
                sides[j] = answer;
            }
    if(sides[0] + sides[1] > sides[2])
        answer = 1;
    else if(sides[0] + sides[1] <= sides[2])
        answer = 2;
    
    return answer;
}