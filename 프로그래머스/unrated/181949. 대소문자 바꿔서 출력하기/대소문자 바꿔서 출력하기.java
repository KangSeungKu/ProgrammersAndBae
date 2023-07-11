import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        String a = new Scanner(System.in).next();
        String resStr = "";
        
        for(int i = 0; i < a.length(); i++) {
        	resStr += (a.charAt(i) + "").toUpperCase().equals((a.charAt(i) + "")) ? (a.charAt(i) + "").toLowerCase() : (a.charAt(i) + "").toUpperCase();
        }
        
        System.out.println(resStr);
    }
}