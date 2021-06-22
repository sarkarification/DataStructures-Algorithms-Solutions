package practiceDailyByte;

import java.util.HashMap;

public class NonOcurring {

	public static void main(String[] args) {
		int[] B = new int[] {1,2,3};
		
		System.out.println(checklow(B));

	}

	public static int checklow(int[] A) {
		HashMap<Integer,Integer>  obj = new HashMap<Integer,Integer>();
		
		for(int i = 0; i < A.length; i++){
			obj.put(A[i], i);
	    }

	    for(int i = 1; i < 100000; i++){
	        if(obj.containsKey(i) == false) return i; 
	        
	    }
		System.out.println(obj);
		return 0;
	}

}
