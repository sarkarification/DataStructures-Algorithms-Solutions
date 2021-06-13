package arrays;

import java.util.Scanner;

public class ValueofSequence {
	
	public static void printSequence(int a , int b , int n) {
		int sum = a;
		for(int i =0 ; i<n; i++)
		{
			sum = (int) ((int) sum + (Math.pow(2, i)*b));
			System.out.print(sum +" ");
		}
	}
		

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
        int t=sc.nextInt();
        int[][] arr = new int[t][3];
        // int a=0; int b=0; int n=0;
        for(int i=0;i<t;i++)
        {
           for(int j=0; j<3; j++) {
        	   arr[i][j] = sc.nextInt();
           }
        }
        
        sc.close();
        for(int i=0;i<t;i++)
        {
        	   printSequence(arr[i][0], arr[i][1], arr[i][2]); // Call func here
        	   System.out.println("");
           
        }
        

	}

}

//1 // 0 2 10
