import java.util.stream.IntStream;

class Solution {
    public int solution(int a, int b, int c) {
        int answer = 0;
        
        switch ((int) IntStream.of(a,b,c).distinct().count()) {
		case 1:
			answer = (int) ((a + b + c) * ((Math.pow(a, 2)) + (Math.pow(b, 2)) + (Math.pow(c, 2))) * ((Math.pow(a, 3)) + (Math.pow(b, 3)) + (Math.pow(c, 3)))); 
			break;
		
		case 2: 
			answer = (int) ((a + b + c) * ((Math.pow(a, 2)) + (Math.pow(b, 2)) + (Math.pow(c, 2))));
			break;
			
		case 3:
			answer = a + b + c;
			break;

		default:
			break;
		}
        
        return answer;
    }
}