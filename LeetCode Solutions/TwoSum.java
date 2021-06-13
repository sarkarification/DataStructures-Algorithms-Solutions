package Problems;

import java.util.*;

public class TwoSum {

	public static void main(String[] args) {
		
		 int[] nums = new int[]{2,7,11,15};
		 int target = 9;
		 
		int[] intArray = new int[2];
//        int sum =0;
//        
//        
//        for(int i=0; i<nums.length; i++)
//        {
//            for(int j=0; j<nums.length; j++) {
//                if(i==j){
//                    break;
//                }
//                sum = nums[i] + nums[j];
//                if(sum == target){
//                    intArray[0] = i;
//                    intArray[1] = j;
//                    
//                }
//                
//            }
//        }
//        System.out.println(intArray[0] + " " +intArray[1]);
		 
		 HashMap<Integer,Integer>  complement = new HashMap<Integer,Integer>();
		 
		 for(int i=0 ; i<nums.length; i++) {
			 if(complement.containsKey(target - nums[i])) {
				 intArray[0] = i;
				 intArray[1] = complement.get(target - nums[i]);
			 }
			 complement.put(nums[i], i);
		 }
		  
		 System.out.println(intArray[0] + " " +intArray[1]);
	}

}
