import java.util.stream.IntStream;

class Solution {
    public int solution(int[] num_list) {
        return Math.pow(IntStream.of(num_list).sum(), 2) > IntStream.of(num_list).reduce((x, y) -> x * y).getAsInt() ? 1 : 0;
    }
}