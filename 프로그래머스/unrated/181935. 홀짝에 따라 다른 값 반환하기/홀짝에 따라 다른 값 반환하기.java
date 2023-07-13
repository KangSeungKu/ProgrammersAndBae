import java.util.stream.IntStream;

class Solution {
	public int solution1(int n) {
        int answer = 0;
        int i = 0;
        int length = n + 1;
        
        for(i = 1; i < length; i++) {
        	answer += n % 2 == 0 ? i%2 == 0 ? Math.pow(i, 2) : 0 : i%2 == 0 ? 0 : i; 
        }
        
        return answer;
    }

    public int solution2(int n) {
        int result = 0;
		
		if(n % 2 == 0) {
			result = IntStream.rangeClosed(1, n).filter(num -> num % 2 == 0).map(num -> (int) Math.pow(num, 2)).sum();
		} else {
			result = IntStream.rangeClosed(1, n).filter(num -> num % 2 != 0).sum();
		}
		
        return result;
    }
}