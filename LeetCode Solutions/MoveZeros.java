package Problems;

public class MoveZeros {

	public static void main(String[] args) {
		int[] Array = new int[] {0,1,0,3,12};
		
		Array = moveZeros(Array);
		
		for(int i = 0; i<Array.length; i++) {
			System.out.print(Array[i] + " ");
		}
	}

//	public static int[] moveZeros(int[] array) {
//		int[] NewArray = new int[array.length];
//		int counter = 0;
//		for(int value=0; value<array.length; value++) 
//			if(array[value] != 0)  
//				{
//					NewArray[counter] = array[value];
//					counter++;
//				}
//		return NewArray;
//	}
	
	public static int[] moveZeros(int[] nums) {
		
		int index = 0;
        for(int i=0; i<nums.length; i++){
            if(nums[i] != 0){
            	System.out.println(nums[i]);
                nums[index] = nums[i];
                index++;
            }
        }
        
        for(int i = index; i<nums.length; i++){
            nums[i] = 0;
        }
		
		return nums;
	}

}
