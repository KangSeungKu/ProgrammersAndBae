def solution(a, d, included):
    sum = 0
    tmp = a
    for i in included:
        if i:
            sum += tmp
        tmp += d 
    return sum