package practiceDailyByte;

import java.util.Scanner;

public class ValidPalindrome {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String str = sc.nextLine();
		sc.close();
		int j=0;
		int count=0;
		str = str.replaceAll("\\p{Punct}", "");
		str = str.replaceAll("\\s", "");
		str = str.toLowerCase();
		str = str.trim();
		
		for(int i = str.length()-1; i>=0; i--) {
			
			if(str.charAt(i) != str.charAt(j)) {
				
				if(count>=1) {
					System.out.println(str.charAt(i) + " " + str.charAt(j) + " " + false) ;
				}
				else {
					count++;
				}
			}
			if(i == ((str.length()/2))) break;
			j++;
		}
		
		
	}

}
