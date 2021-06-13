package Problems;

public class MaximumSubarray {

	public static void main(String[] args) {
		int[] Array = new int[] {1,2,-1,-2,2,1,-2,1,4,-5,4};
		
		System.out.println(findMaxSubArray(Array));
	}

	public static int findMaxSubArray(int[] nums) {
		int maxCur=nums[0];
		int maxGlo=nums[0];
		
		for(int value=1; value<nums.length; value++) {
			if(nums[value] > maxCur+nums[value]) {
				maxCur = nums[value];
			} else if (nums[value] <= maxCur+nums[value]) {
				maxCur = maxCur+nums[value];
			}
			
			if(maxCur>maxGlo) maxGlo=maxCur;
			 
		}
		
		return maxGlo;
	}

}
