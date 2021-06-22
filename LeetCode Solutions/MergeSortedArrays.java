package Problems;

public class MergeSortedArrays {

	public static void main(String[] args) {
		int[] nums1 = new int[] {1,3};
		int[] nums2 = new int[] {2};
		int[] mergeArray = new int[nums1.length + nums2.length];
		mergesortedArray(nums1, nums2, mergeArray);
		
		for(int i = 0; i<mergeArray.length; i++) {
			System.out.println(mergeArray[i]);
		}
	}

	private static void mergesortedArray(int[] nums1, int[] nums2, int[] mergeArray) {
		
		
		int i = 0, j = 0, k = 0;
	     
        // Traverse both array
        while (i<nums1.length && j <nums2.length)
        {
            // Check if current element of first
            // array is smaller than current element
            // of second array. If yes, store first
            // array element and increment first array
            // index. Otherwise do same with second array
            if (nums1[i] < nums2[j]) {
            	mergeArray[k] = nums1[i];
            	k++; i++;
            }
            	
            else{
            	mergeArray[k] = nums2[j];
            	k++; j++;
            }
        }
     
        // Store remaining elements of first array
        while (i < nums1.length)
        	mergeArray[k++] = nums1[i++];
     
        // Store remaining elements of second array
        while (j < nums2.length)
        	mergeArray[k++] = nums2[j++];
        
        
	}
	
	

}
