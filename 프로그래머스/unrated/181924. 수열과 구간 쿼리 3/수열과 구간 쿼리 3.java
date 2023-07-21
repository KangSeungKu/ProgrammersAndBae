class Solution {
    public int[] solution(int[] arr, int[][] queries) {
        int[] answer = {};
        
        for(int[] query : queries) {
        	answer = swap(arr, query[0], query[1]);
        }
        
        return answer;
    }
    
    public int[] swap(int[] src, int a1, int a2) {
    	int tmp = src[a2];
    	src[a2] = src[a1];
    	src[a1] = tmp;
    	
    	return src;
    }
}