class Solution {
    public int solution(int n) {
        int answer = 0;
        int i = 0;
        int length = n + 1;
        
        for(i = 1; i < length; i++) {
        	answer += n % 2 == 0 ? i%2 == 0 ? Math.pow(i, 2) : 0 : i%2 == 0 ? 0 : i; 
        }
        
        return answer;
    }
}