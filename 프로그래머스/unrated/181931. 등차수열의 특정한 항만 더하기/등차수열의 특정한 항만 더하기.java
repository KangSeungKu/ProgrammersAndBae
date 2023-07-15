class Solution {
    public int solution(int a, int d, boolean[] included) {
        int answer = 0;
        int seq = a;
        
        for(boolean inc : included) {
        	answer += inc ? seq : 0;
        	seq += d;
        }
        
        return answer;
    }
}