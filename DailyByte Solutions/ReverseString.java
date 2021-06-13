package practiceDailyByte;

import java.util.Scanner;

public class ReverseString {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String str = sc.next();
		sc.close();
		str = str.trim();
		char charA[] = str.toCharArray();
		char[] charB = new char[charA.length];
		int j=0;
		
		for(int i=charA.length-1; i>=0; i--) {
			
			charB[j] = charA[i];
			j++;
		}
		
		for(int i=0; i<charA.length; i++) {
			
			System.out.print(charB[i]);
			
		}
	}

}
