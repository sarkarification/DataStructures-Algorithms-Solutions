package Problems;

public class RotateArray {

	public static void main(String[] args) {
		int[] nums = new int[]{1,2,3,4,5,6,7};
		int k = 3;
		rotate(nums,k);
		for(int i=0 ; i<nums.length; i++) {
			System.out.println(nums[i]);;
		}
	}

	private static void rotate(int[] nums, int k) {
		int[] newNums = new int[nums.length];
		int j=0;
		if(k==nums.length || k==0) newNums=nums;
		
		for(int i=newNums.length-k ; i<newNums.length; i++) {
			newNums[j] = nums[i];
			j++;
		}
		
		
		for(int i=0 ; i<newNums.length-k; i++) {
			newNums[j] = nums[i];
			j++;
		}
		
		nums = newNums;
	} 

}
