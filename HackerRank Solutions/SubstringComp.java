package arrays;

import java.util.Scanner;

public class SubstringComp {

    public static String getSmallestAndLargest(String s, int k) {
        String smallest = "";
        String largest = "";
        int arrLength = s.length() - (k-1);
        String[] arr = new String[arrLength];
        
        for(int i=0; i<arrLength; i++ ) {
        	arr[i] = s.substring(i, i+k);
        	smallest=arr[i];
        	largest=arr[i];
        }
        for(int i=0; i<arrLength; i++ ) {
        	if(arr[i].compareTo(smallest) < 0) {
        		smallest = arr[i];
        	}
        	if(arr[i].compareTo(largest) > 0) {
        		largest = arr[i];
        	}
        }
        return smallest + "\n" + largest;
    }


    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String s = scan.next();
        int k = scan.nextInt();
        scan.close();
      
        System.out.println(getSmallestAndLargest(s, k));
    }
}