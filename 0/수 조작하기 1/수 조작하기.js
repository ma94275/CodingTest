function solution(n, control) {
    var answer = 0;
    for(let i = 0; i < control.length; i++){
        if(control[i].includes('w'))
            n += 1;
        else if(control[i].includes('s'))
            n -= 1;
        else if(control[i].includes('d'))
            n += 10;
        else if(control[i].includes('a'))
            n -= 10;
    }
    return n;
}