class Solution {
    public String solution(int[] numLog) {
        String answer = "";
        int idx = numLog[0];
        
        for(int i = 1; i < numLog.length; i++) {
        	answer += conv(numLog[i] - idx);
        	idx = numLog[i];
        }
        
        return answer;
    }
    
    public char conv(int plus) {
    	char res = '\0';
    	
    	switch (plus) {
			case 1:
				res = 'w';
				break;
			case -1:
				res = 's';
				break;
			case 10:
				res = 'd';
				break;
			case -10:
				res = 'a';
				break;
	
			default:
				break;
		}
    	
    	return res;
    }
}