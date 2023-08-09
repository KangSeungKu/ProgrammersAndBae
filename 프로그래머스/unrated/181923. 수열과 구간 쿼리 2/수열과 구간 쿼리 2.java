import java.util.stream.IntStream;
import java.util.ArrayList;
import java.util.Collections;

class Solution {
    public int[] solution1(int[] arr, int[][] queries) {
        int[] answer = new int[queries.length];
        int idx = 0;
        
        for(int[] query : queries) {
        	ArrayList<Integer> minList = new ArrayList<Integer>();
        	
        	for(int i = query[0]; i <= query[1]; i++) {
        		if(query[2] < arr[i]) {
        			minList.add(arr[i]);
        		}
        	}
        	
        	answer[idx++] = minList.size() == 0 ? -1 : Collections.min(minList);
        }
        
        return answer;
    }

    public int[] solution2(int[] arr, int[][] queries) {
        int[] answer = {};
        return IntStream.range(0, queries.length)
                .map(q -> IntStream.rangeClosed(queries[q][0], queries[q][1])
                        .map(i -> arr[i])
                        .filter(i -> i > queries[q][2])
                        .min().orElse(-1)
                ).toArray();
    }
}