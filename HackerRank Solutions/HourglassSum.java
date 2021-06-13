package arrays;

import java.util.Scanner;

public class HourglassSum {
	
	public static void hourglass(int[][] array) {
		int Maxsum = Integer.MIN_VALUE;
		
		for(int i =0 ; i<6; i++)
		{
			for(int j =0 ; j<6; j++)
			{
				if(i>1 && j>1) 
				{
					int sum = array[i][j] + array[i][j-1] + array[i][j-2]  + array[i-1][j-1]  + array[i-2][j]  + array[i-2][j-1]  + array[i-2][j-2];
					if(sum>Maxsum) {
						Maxsum =sum;
					}
					
				}
				
			}
		}
		
		System.out.println(Maxsum);
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int[][] arr = new int[6][6];
		
		for(int i =0 ; i<6; i++)
		{
			for(int j =0 ; j<6; j++)
			{
				arr[i][j] = sc.nextInt();
			}
		}
		sc.close();
		hourglass(arr);
		

	}

}
