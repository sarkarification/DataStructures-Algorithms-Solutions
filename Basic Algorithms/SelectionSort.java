package basicAlgos;

public class SelectionSort {

	public static void main(String[] args) {
		int[] List = new int[] {45,86,95,12,36,47,89,36,98};
		
		SelectionSorting(List);
		
//		for(int i=0; i<List.length; i++) {
//			System.out.println(List[i]);
//		}
		

	}

	public static void SelectionSorting(int[] list) {
				
		for(int i=1; i<list.length; i++) {
			int min_idx = i;
            for (int j = i+1; j < list.length; j++)
                if (list[j] < list[min_idx])
                    min_idx = j;
 
            int temp = list[min_idx];
            list[min_idx] = list[i];
            list[i] = temp;
            System.out.println(list[i]);
		}
				
		
	}

}
