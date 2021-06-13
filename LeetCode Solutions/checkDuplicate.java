package Problems;

import java.util.HashMap;

public class checkDuplicate {

	public static void main(String[] args) {
		int[] nums = new int[]{2,7,11,15};
		HashMap<Integer,Integer>  complement = new HashMap<Integer,Integer>();
		
		for(int i=0 ; i<nums.length; i++) {
			if(complement.containsKey(nums[i])) {
				 System.out.println(true); 
			 }
			 complement.put(nums[i], i);
		}
		System.out.println(false);
	}

}
