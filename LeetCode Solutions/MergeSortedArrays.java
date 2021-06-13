package Problems;

public class MergeSortedArrays {

	public static void main(String[] args) {
		int[] nums1 = new int[] {0,3,4,31};
		int[] nums2 = new int[] {4,6,30};
		int[] mergeArray = new int[nums1.length + nums2.length];
		mergesortedArray(nums1, nums2, mergeArray);
		
		for(int i = 0; i<mergeArray.length; i++) {
			System.out.println(mergeArray[i]);
		}
	}

	private static void mergesortedArray(int[] arr1, int[] arr2, int[] mergeArray) {
		
		
		int i = 0, j = 0, k = 0;
	     
        // Traverse both array
        while (i<arr1.length && j <arr2.length)
        {
            // Check if current element of first
            // array is smaller than current element
            // of second array. If yes, store first
            // array element and increment first array
            // index. Otherwise do same with second array
            if (arr1[i] < arr2[j]) {
            	mergeArray[k] = arr1[i];
            	k++; i++;
            }
            	
            else{
            	mergeArray[k] = arr2[j];
            	k++; j++;
            }
        }
     
        // Store remaining elements of first array
        while (i < arr1.length)
        	mergeArray[k++] = arr1[i++];
     
        // Store remaining elements of second array
        while (j < arr2.length)
        	mergeArray[k++] = arr2[j++];
	
	}
	
	

}
