package practiceDailyByte;

import java.util.Collections;
import java.util.HashMap;

public class FirstUniqueCharacter {

	public static void main(String[] args) {
		String s = "leetcode";
		
		HashMap<Character,Integer>  map = new HashMap<Character,Integer>();
		 
		 for(int i=0 ; i<s.length(); i++) {
			 if(map.containsKey(s.charAt(i))){
				 map.put(s.charAt(i),Integer.MAX_VALUE);
			 }
			 else {
				 map.put(s.charAt(i),i);
			 }
		 }
		 
		 int minInValues = Collections.min(map.values());
		 if(minInValues == Integer.MAX_VALUE) {
			 System.out.println("-1");
		 } else {
			 System.out.println(minInValues);
		 }
	}

}

//Hash_Map.remove(Object key)
//complement.containsKey()
//complement.put(s.charAt(i), i);
//complement.get(nums[i]);