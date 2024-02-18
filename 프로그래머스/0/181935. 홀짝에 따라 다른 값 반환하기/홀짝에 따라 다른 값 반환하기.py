def solution(n):
    answer = 0

    for num in range(n+1):
        if(n % 2):
            if(num % 2):
                answer += num
            else:
                continue                
        else:
            if(num % 2):
                continue                
            else:
                answer += num ** 2
    return answer