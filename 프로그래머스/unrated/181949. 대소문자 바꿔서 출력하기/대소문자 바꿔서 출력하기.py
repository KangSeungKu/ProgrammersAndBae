str = input()
res = ""
for s in str:
    if s.lower() == s:
        res += s.upper()
    else:
        res += s.lower()
        
print(res)