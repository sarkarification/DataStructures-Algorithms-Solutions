package Problems;

public class DuplicateZero {

	public static void main(String[] args) {
		int[] nums = new int[] {1,0,2,3,4,4,5,9};
		int[] zeronums = new int[nums.length];
		
		for(int i = 0; i<nums.length; i++) {
			if(nums[i] != 0) {
				zeronums[i] = nums[i];
			} else {
				zeronums[i+1] = nums[i];
				
			}
		
		}
		for(int i = 0; i<nums.length; i++) {
			System.out.println(zeronums[i]);
		}

	}
}
