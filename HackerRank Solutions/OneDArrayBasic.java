package arrays;

import java.util.Scanner;

public class OneDArrayBasic {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int arrLength =  sc.nextInt();
		int[] arr = new int[arrLength];
		
		for(int i =0 ; i<arrLength; i++)
		{
				arr[i] = sc.nextInt();
			
		}
		sc.close();
		for(int i =0 ; i<arrLength; i++)
		{
				System.out.println(arr[i]);
			
		}

	}

}
