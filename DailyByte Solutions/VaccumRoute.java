package practiceDailyByte;

import java.util.Scanner;

public class VaccumRoute {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String str = sc.next();
		boolean ret= false;
		sc.close();
		str = str.trim();
		int horizontal = 0 ;
		int vertical = 0 ;
		char charA[] = str.toCharArray();

		for(int value=0; value<charA.length; value++) {
			if(charA[value] == 'L') {
				horizontal++;
			} 
			if(charA[value] == 'R') {
				horizontal--;
			} 
			if(charA[value] == 'U') {
				vertical++;
				
			} 
			if(charA[value] == 'D') {
				vertical--;
			}
			
		}
		
		if(horizontal==0 && vertical==0) {
			ret=true;
		}
		else ret= false;
		
		System.out.println(ret);
	}

}
