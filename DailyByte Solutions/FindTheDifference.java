package practiceDailyByte;

import java.util.HashMap;
import java.util.Set;
import java.util.TreeSet;

public class FindTheDifference {
	
	public static void main(String[] args) {
		String s = "ae";
		String t = "aea";
		
		System.out.println(findTheDifference(s, t));
		
		}
	
		
	public static char findTheDifference(String s, String t) {
		if(s.length() == t.length()) return ' '; 
		else {
			HashMap<Character,Integer>  map = new HashMap<Character,Integer>();
			//Iterating whole s.length || t.length()-1
			for(int i=0 ; i<t.length()-1; i++) {
				
				if(map.containsKey(t.charAt(i))) {
					map.remove(t.charAt(i));
				}else  {
					map.put(t.charAt(i), i);
				}
				if(map.containsKey(s.charAt(i))) {
					map.remove(s.charAt(i));
				}else  {
					map.put(s.charAt(i), i);
				}
				
			}
			//Iterating the last element manually
			if(map.containsKey(t.charAt(t.length()-1))) {
				map.remove(t.charAt(t.length()-1));
			}else  {
				map.put(t.charAt(t.length()-1), t.length()-1);
			}
			char[] oddChar = new char[map.keySet().size()];
			int i =0;
			for (Character x : map.keySet())
				oddChar[i++] = x;
			return oddChar[0];
	}
		
}

}