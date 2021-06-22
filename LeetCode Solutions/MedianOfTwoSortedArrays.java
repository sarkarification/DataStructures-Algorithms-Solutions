package Problems;

public class MedianOfTwoSortedArrays {

	public static void main(String[] args) {
		int[] nums1 = new int[] {1,2};
		int[] nums2 = new int[] {3, 4, 5};
		
		mergesortedArray(nums1, nums2);
	}

	private static void mergesortedArray(int[] nums1, int[] nums2) {
		
		double[] mergeArray = new double[nums1.length + nums2.length];
		
		int i = 0, j = 0, k = 0;
	     
        while (i<nums1.length && j <nums2.length)
        {
            if (nums1[i] < nums2[j]) {
            	mergeArray[k] = nums1[i];
            	k++; i++;
            }
            	
            else{
            	mergeArray[k] = nums2[j];
            	k++; j++;
            }
        }
     
        while (i < nums1.length)
        	mergeArray[k++] = nums1[i++];
     
        while (j < nums2.length)
        	mergeArray[k++] = nums2[j++];
        
        double medianValue = 0; 
        int middle = mergeArray.length/2;
        if (mergeArray.length%2 == 1) 
            medianValue = mergeArray[middle];
        else
           medianValue = Math.abs((mergeArray[middle-1] + mergeArray[middle]) / 2);
        
        System.out.println(medianValue);
	}

}
