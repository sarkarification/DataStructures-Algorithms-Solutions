package practiceDailyByte;

import java.util.Scanner;

public class CorrectCapitalisation {
	
	private static boolean correctCapital(String str) {
		
		int uppercase=0;
		
	
		for(int i=0 ; i<str.length(); i++) {
			
			if(Character.isUpperCase(str.charAt(i))) {
				uppercase++;
			}
		}
		
		if(uppercase == str.length()) {
			return true;
		} else if(uppercase == 1 && Character.isUpperCase(str.charAt(0))) {
			return true;
		} else if(uppercase==0) {
			return true;
		}
		
		
		return false;
	}
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String str = sc.next();
		sc.close();
		System.out.println(correctCapital(str));
	}

	
}

//This question is asked by Google. Given a string, return whether or not it uses capitalization correctly. A string correctly uses capitalization if all letters are capitalized, no letters are capitalized, or only the first letter is capitalized.
//
//Ex: Given the following strings...
//
//"USA", return true
//"Calvin", return true
//"compUter", return false
//"coding", return true
