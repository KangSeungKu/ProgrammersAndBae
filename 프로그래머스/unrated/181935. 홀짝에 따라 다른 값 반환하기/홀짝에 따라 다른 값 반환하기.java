import java.util.stream.IntStream;

class Solution {
    public int solution(int n) {
        int result = 0;
		
		if(n % 2 == 0) {
			result = IntStream.rangeClosed(1, n).filter(num -> num % 2 == 0).map(num -> (int) Math.pow(num, 2)).sum();
		} else {
			result = IntStream.rangeClosed(1, n).filter(num -> num % 2 != 0).sum();
		}
		
        return result;
    }
}