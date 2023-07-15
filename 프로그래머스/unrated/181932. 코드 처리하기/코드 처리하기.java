class Solution {
    public String solution(String code) {
        String ret = "";
        boolean mode = false;
        int codeLength = code.length();
        
        for(int idx = 0; idx < codeLength; idx++) {
        	if(mode) {	// mode가 1일 때,
        		if(code.charAt(idx) == '1') {
        			mode = !mode;
        		} else {
        			if(idx % 2 != 0) {
        				ret += code.charAt(idx);
        			}
        		}
        	} else {	// mode가 0일 때,
        		if(code.charAt(idx) == '1') {
        			mode = !mode;
        		} else {
        			if(idx % 2 == 0) {
        				ret += code.charAt(idx);
        			}
        		}
        	}
        }
        
        return ret.isEmpty() ? "EMPTY" : ret;
    }
}