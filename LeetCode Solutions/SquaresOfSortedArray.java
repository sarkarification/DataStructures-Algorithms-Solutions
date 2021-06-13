package Problems;

import java.util.Arrays;

public class SquaresOfSortedArray {

	public static void main(String[] args) {
		int[] nums = new int[] {-4,-1,0,3,10};
		int[] SquareArray = new int[nums.length];
		for(int value=0; value<nums.length; value++) {
			int tempval = (int) Math.pow(nums[value], 2);
			SquareArray[value] = tempval;
		}
		Arrays.sort(SquareArray);
		for(int value=0; value<nums.length; value++) {
					System.out.println(SquareArray[value]);
		}
		
	}

}
