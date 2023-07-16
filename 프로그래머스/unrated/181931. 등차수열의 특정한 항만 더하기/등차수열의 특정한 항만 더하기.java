import java.util.stream.IntStream;

class Solution {
    public int solution1(int a, int d, boolean[] included) {
        int answer = 0;
        int seq = a;
        
        for(boolean inc : included) {
        	answer += inc ? seq : 0;
        	seq += d;
        }
        
        return answer;
    }
    
    public int solution2(int a, int d, boolean[] included) {
        return IntStream.range(0, included.length).map(x -> included[x] ? a + d * x : 0).sum();
    }
}