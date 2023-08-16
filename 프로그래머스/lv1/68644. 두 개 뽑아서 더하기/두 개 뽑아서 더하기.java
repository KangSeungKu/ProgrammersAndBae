class Solution {
    public int[] solution(int[] numbers) {
        int[] answer = {};
        
        int size1 = factorial(numbers.length);
        
        int[] answer2 = new int[size1];
        int[] answer3 = new int[size1];
        
        int num = 0;
        for(int i = 0 ; i < numbers.length ; i++) {
            for(int j = i ; j < (numbers.length-1) ; j++) {
                answer2[num] = numbers[i] + numbers[j+1];
                answer3[num] = -1;
                num++;
            }
        }
        
        int size = 0;
        
        for(int i = 0 ; i < answer2.length ; i++) {
            boolean flag = true;
            for(int j = 0 ; j < answer2.length ; j++) {
                if(answer2[i] == answer3[j]) flag = false;
            }
            
            if(flag) {
                answer3[size] = answer2[i];
                size++;
            }
        }
        
        answer = new int[size];
        
        for(int i = 0 ; i < size ; i++) {
            answer[i] = answer3[i];
        }
        
        for(int i = 0 ; i < answer.length ; i++) {
            for(int j = 0 ; j < (answer.length - 1 - i) ; j++) {
                if(answer[j] > answer[j+1]) {
                    int temp = answer[j];
                    answer[j] = answer[j+1];
                    answer[j+1] = temp;
                }
            }
        }
        
        return answer;
    }
    
    public int factorial(int num) {
        if(num <= 2) return 1;
        else return (num-1) + factorial(num-1);
    }
}