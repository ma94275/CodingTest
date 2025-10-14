function solution(my_string) {
    var answer = '';
    const remove = ['a', 'e', 'i', 'o', 'u'];
    answer = [...my_string].filter(n => !remove.includes(n)).join('');
    return answer;
}