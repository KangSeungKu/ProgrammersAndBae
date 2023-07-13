class Solution {
    public int solution1(int a, int b) {
        return Math.max(Integer.parseInt(a + "" + b), 2 * a * b);
    }

    public int solution2(int a, int b) {
        return Math.max(Integer.parseInt(String.valueOf(a)+String.valueOf(b)),2*a*b);
    }
}