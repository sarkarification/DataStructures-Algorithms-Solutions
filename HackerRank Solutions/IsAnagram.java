package arrays;

import java.util.Scanner;

public class IsAnagram {
	
	static int CharCount = 256;

	static boolean isAnagram(String a, String b) {
	        
	        if (a.length() != b.length()) return false;
	        
	        int[] count = new int[CharCount];
	        
	        a = a.toLowerCase();
	        b = b.toLowerCase();
	        
	        char charA[] = a.toCharArray();
	        char charB[] = b.toCharArray();
	        
	        for(int i=0; i<charA.length; i++) {
	        	count[charA[i] - 'a']++;
	        	count[charB[i] - 'a']--;
	        }
	        
	        for(int i = 0; i < CharCount; i++)
	            if (count[i] != 0) 
	            {
	                return false;
	            }
	        return true;
	        
	    }
	
	    public static void main(String[] args) {
	    
	        Scanner scan = new Scanner(System.in);
	        String a = scan.next();
	        String b = scan.next();
	        scan.close();
	        boolean ret = isAnagram(a, b);
	        System.out.println( (ret) ? "Anagrams" : "Not Anagrams" );
	    }
	
}


