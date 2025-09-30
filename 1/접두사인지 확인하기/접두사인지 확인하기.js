function solution(my_string, is_prefix) {
    my_string = my_string.slice(0, is_prefix.length);
    if(my_string == is_prefix)
        return 1;
    return 0;
}