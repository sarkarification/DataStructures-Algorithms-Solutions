package basicAlgos;

public class BinarySearch {

	public static void main(String[] args) {
		int[] List = new int[] {1,2,3,4,5,6,7,8,9,45};
		int find = 1;
		
		System.out.println(binarySearch(List, find));
	}

	public static boolean binarySearch(int[] list, int find) {
		int low = 0;
		int high = list.length-1;
		int mid = 0;
		int guess = 0;
		while (low <= high) {
			mid = (int) Math.floor((low+high)/2);
			guess = list[mid];
			if(guess == find) 
				{
					System.out.println("found");
					return true;
				 
				 }
			else if(guess>find) {
				System.out.println("less than mid");
				high = mid-1;
			}
			else if(guess<find) {
				System.out.println("more than mid");
				low=mid+1;
			}
		}
		return false;
	}

}
